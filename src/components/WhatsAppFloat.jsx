import { WHATSAPP_LINK } from '../whatsapp';

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
      aria-label="Escribinos por WhatsApp"
    >
      <img src="/whatsapp-icon.png" alt="WhatsApp" />
    </a>
  );
}
