/**
 * Animated SVG icon components used in the Contact section and Footer.
 *
 * Each icon has a CSS-driven hover animation defined in global.css:
 *  • EmailIcon    — envelope flap opens + notification dot pings
 *  • PhoneIcon    — handset rocks + ring pulses
 *  • LinkedInIcon — badge spring-scales
 *  • GitHubIcon   — octo-arm sways (idle) / waves (hover)
 */

export function EmailIcon({ size = 22 }) {
  return (
    <svg
      className="ico-email"
      viewBox="0 0 24 24"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size} height={size}
    >
      <rect x="2" y="4" width="20" height="16" rx="3"
        fill="rgba(0,245,196,.08)" stroke="var(--a1)" strokeWidth="1.8" />
      <polyline className="flap" points="2,4 12,13 22,4"
        fill="none" stroke="var(--a1)" strokeWidth="1.8" />
      <circle className="dot" cx="19" cy="6" r="2.5"
        fill="var(--a1)" stroke="none" />
    </svg>
  );
}

export function PhoneIcon({ size = 22 }) {
  return (
    <svg
      className="ico-phone"
      viewBox="0 0 24 24"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size} height={size}
    >
      <circle className="ring" cx="12" cy="12" r="9.5"
        fill="none" stroke="var(--a1)" strokeWidth="1" />
      <path className="handset"
        d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"
        fill="rgba(0,245,196,.1)" stroke="var(--a1)" strokeWidth="1.8"
      />
    </svg>
  );
}

export function LinkedInIcon({ size = 22 }) {
  return (
    <svg className="ico-linkedin" viewBox="0 0 24 24" fill="none" width={size} height={size}>
      <rect x="2" y="2" width="20" height="20" rx="5"
        fill="rgba(59,130,246,.12)" stroke="#3b82f6" strokeWidth="1.5" />
      <rect className="badge" x="5" y="9" width="3.5" height="10" rx="1" fill="#3b82f6" />
      <circle cx="6.75" cy="6.75" r="1.75" fill="#3b82f6" />
      <path d="M12 9v10M12 12.5c0-2 1.5-3.5 3.5-3.5S19 11 19 13v6"
        stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function GitHubIcon({ size = 22 }) {
  return (
    <svg className="ico-github" viewBox="0 0 24 24" fill="none" width={size} height={size}>
      <path
        d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
        fill="rgba(200,200,220,.9)"
      />
      <path className="octo-arm"
        d="M8.5 14.5s-1-1-1-2.5 1-2.5 1-2.5"
        stroke="rgba(124,58,237,.8)" strokeWidth="1.5" strokeLinecap="round" fill="none"
      />
    </svg>
  );
}

export function WhatsAppIcon({ size = 22 }) {
  return (
    <svg className="ico-whatsapp" viewBox="0 0 24 24" fill="none" width={size} height={size}>
      <path
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"
        fill="#25D366"
      />
    </svg>
  );
}

/* Smaller versions for footer (18px) */
export function LinkedInIconSm() {
  return (
    <svg className="ico-linkedin" viewBox="0 0 24 24" fill="none" width={18} height={18}>
      <rect x="2" y="2" width="20" height="20" rx="5"
        fill="rgba(59,130,246,.15)" stroke="#3b82f6" strokeWidth="1.4" />
      <rect className="badge" x="5" y="9" width="3.5" height="9" rx="1" fill="#60a5fa" />
      <circle cx="6.75" cy="6.75" r="1.75" fill="#60a5fa" />
      <path d="M12 9v9M12 12.5c0-2 1.5-3.5 3.5-3.5S19 11 19 13v5"
        stroke="#60a5fa" strokeWidth="1.9" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function GitHubIconSm() {
  return (
    <svg className="ico-github" viewBox="0 0 24 24" fill="none" width={18} height={18}>
      <path
        d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
        fill="rgba(200,200,230,.85)"
      />
      <path className="octo-arm"
        d="M8.5 14.5s-1-1-1-2.5 1-2.5 1-2.5"
        stroke="rgba(167,139,250,.9)" strokeWidth="1.5" strokeLinecap="round" fill="none"
      />
    </svg>
  );
}

export function WhatsAppIconSm() {
  return (
    <svg className="ico-whatsapp" viewBox="0 0 24 24" fill="none" width={18} height={18}>
      <path
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"
        fill="#25D366"
      />
    </svg>
  );
}

export function EmailIconSm() {
  return (
    <svg className="ico-email" viewBox="0 0 24 24" fill="none"
      strokeLinecap="round" strokeLinejoin="round" width={18} height={18}>
      <rect x="2" y="4" width="20" height="16" rx="3"
        fill="rgba(0,245,196,.1)" stroke="var(--a1)" strokeWidth="1.6" />
      <polyline className="flap" points="2,4 12,13 22,4"
        fill="none" stroke="var(--a1)" strokeWidth="1.6" />
      <circle className="dot" cx="19" cy="6" r="2.2"
        fill="var(--a1)" stroke="none" />
    </svg>
  );
}
