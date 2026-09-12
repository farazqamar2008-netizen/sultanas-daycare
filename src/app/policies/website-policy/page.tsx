import type { Metadata } from "next";
import { PolicyPage } from "@/components/policies/PolicyPage";
import { BUSINESS } from "@/data/business";

export const metadata: Metadata = {
  title: `Website Policy | ${BUSINESS.name}`,
};

export default function WebsitePolicyPage() {
  return (
    <PolicyPage title="Website Policy">
      <p>
        This policy covers how the {BUSINESS.name} website (this site) handles the
        information you share with us and the content we publish here.
      </p>

      <h2>Photos &amp; content</h2>
      <p>
        Photos of children shown on this site are posted with the relevant family&apos;s
        permission. If you&apos;d like a photo of your child removed, contact us at{" "}
        {BUSINESS.email} and we&apos;ll take it down promptly.
      </p>

      <h2>Information you send us</h2>
      <p>
        When you submit the application or contact form, the details you provide (parent
        and child information, contact details, and your message) are sent to us to
        respond to your enrollment inquiry or question. We don&apos;t sell or share this
        information with third parties.
      </p>

      <h2>Third-party services</h2>
      <ul>
        <li>A Google Map embed is used on the Contact section.</li>
        <li>Google reviews are displayed via a third-party widget (Shapo).</li>
        <li>Form submissions are processed by Google Apps Script.</li>
      </ul>
      <p>Each of these is subject to its own provider&apos;s privacy practices.</p>

      <h2>Accuracy</h2>
      <p>
        We try to keep hours, services, and pricing information current, but details on
        this site are for general information and may change — please confirm anything
        important directly with us.
      </p>

      <h2>Questions</h2>
      <p>
        Reach out to {BUSINESS.email} or {BUSINESS.phone} with any questions about this
        policy.
      </p>
    </PolicyPage>
  );
}
