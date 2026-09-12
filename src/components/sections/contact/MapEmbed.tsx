export function MapEmbed() {
  return (
    <div className="overflow-hidden rounded-3xl border-4 border-white shadow-playful">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2864.9054218574856!2d-79.58632948735314!3d44.105943470963574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ac5e6bf74b745%3A0xfb3497e186fcc871!2sSultana's%20Daycare%20%26%20Babysitting!5e0!3m2!1sen!2sca!4v1789226033540!5m2!1sen!2sca"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        title="Map showing Sultana's Daycare & Babysitting location"
        className="aspect-[4/3] w-full sm:aspect-video"
      />
    </div>
  );
}
