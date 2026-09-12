/**
 * Sultana's Daycare — form backend.
 *
 * Handles two payload shapes on the same endpoint, distinguished by the
 * presence of `message` (the Phase 6 contact form sends { name, email,
 * message }; the application form sends the richer shape below):
 *   - Application: { parentName, email, phone, numChildren, children[], schedule, startDate }
 *   - Contact:     { name, email, message }
 *
 * See google-apps-script/README.md for deployment steps.
 */
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();

    if (data.message !== undefined) {
      return handleContactMessage(data, ss);
    }
    return handleApplication(data, ss);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ result: 'error', error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function handleApplication(data, ss) {
  var sheet = ss.getSheetByName('Applications') || ss.getSheets()[0];
  var children = (data.children || []).map(function (c) {
    return c.name + ' (DOB: ' + c.dob + (c.allergies ? ', allergies: ' + c.allergies : '') + ')';
  });
  sheet.appendRow([
    new Date(), data.parentName, data.email, data.phone,
    data.numChildren, children.join(' | '),
    data.schedule || '', data.startDate || ''
  ]);

  var subject = 'New Daycare Application — ' + data.parentName;
  var body =
    'New application received:\n\n' +
    'Parent: ' + data.parentName + '\n' +
    'Email: ' + data.email + '\n' +
    'Phone: ' + data.phone + '\n' +
    'Children (' + data.numChildren + '):\n  ' + children.join('\n  ') + '\n' +
    'Schedule: ' + (data.schedule || '—') + '\n' +
    'Start date: ' + (data.startDate || '—') + '\n\n' +
    '----------------------------------------\n' +
    'COPY-PASTE REPLY — YES (we have availability):\n' +
    'Hi ' + data.parentName + ', thank you for your interest in Sultana\'s Daycare! ' +
    'We\'re happy to let you know we have availability. We\'d love to set up a time to meet ' +
    'and go over scheduling and next steps. When works best for you? — Sultana\'s Daycare\n\n' +
    '----------------------------------------\n' +
    'COPY-PASTE REPLY — NO (no availability right now):\n' +
    'Hi ' + data.parentName + ', thank you so much for considering Sultana\'s Daycare. ' +
    'Unfortunately we don\'t have availability that matches your needs right now, but we\'d be ' +
    'glad to add you to our waitlist and reach out the moment a spot opens. Wishing you all the best. ' +
    '— Sultana\'s Daycare\n';

  MailApp.sendEmail('sultanasdaycare@gmail.com', subject, body);
  return ContentService.createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function handleContactMessage(data, ss) {
  var sheet = ss.getSheetByName('Contact Messages') || ss.insertSheet('Contact Messages');
  sheet.appendRow([new Date(), data.name || '', data.email || '', data.message || '']);

  var subject = 'New Contact Message — ' + (data.name || 'Website visitor');
  var body =
    'New message from the website contact form:\n\n' +
    'Name: ' + (data.name || '—') + '\n' +
    'Email: ' + (data.email || '—') + '\n\n' +
    'Message:\n' + (data.message || '');

  MailApp.sendEmail('sultanasdaycare@gmail.com', subject, body);
  return ContentService.createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
