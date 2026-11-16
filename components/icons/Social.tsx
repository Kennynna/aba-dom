type SocialIconProps = { className?: string };

export function WhatsAppIcon({ className = "h-6 w-6" }: SocialIconProps) {
  return <span aria-hidden className={`social-icon social-icon-whatsapp ${className}`} />;
}

export function InstagramIcon({ className = "h-6 w-6" }: SocialIconProps) {
  return <span aria-hidden className={`social-icon social-icon-instagram ${className}`} />;
}
