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
      <svg viewBox="0 0 32 32" width="30" height="30" aria-hidden="true">
        <path
          fill="#fff"
          d="M16 4C9.4 4 4 9.4 4 16c0 2.2.6 4.3 1.7 6.1L4 28l6.1-1.6c1.7 1 3.7 1.5 5.9 1.5 6.6 0 12-5.4 12-12S22.6 4 16 4z"
          opacity="0"
        />
        <path
          fill="#fff"
          d="M22.6 19c-.3-.2-2-1-2.3-1.1-.3-.1-.5-.2-.8.2-.2.3-.9 1.1-1.1 1.3-.2.2-.4.3-.8.1-.3-.2-1.4-.5-2.7-1.7-1-.9-1.7-2-1.9-2.3-.2-.3 0-.5.1-.7.2-.2.3-.3.5-.5.2-.2.2-.3.3-.5.1-.2.1-.4 0-.6-.1-.2-.8-1.9-1-2.6-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8s1.2 3.3 1.4 3.5c.2.2 2.4 3.7 5.9 5.1.8.3 1.4.5 1.9.7.8.2 1.5.2 2 .1.6-.1 2-.8 2.2-1.6.3-.8.3-1.5.2-1.6-.1-.1-.3-.2-.6-.4z"
        />
      </svg>
    </a>
  );
}
