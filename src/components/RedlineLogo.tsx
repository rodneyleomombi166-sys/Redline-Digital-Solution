import React from 'react';

interface RedlineLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const RedlineLogo: React.FC<RedlineLogoProps> = ({
  variant = 'light',
  size = 'md',
  className = '',
}) => {
  const secondaryColor = variant === 'dark' ? '#FFFFFF' : '#111111';
  const heightClass =
    size === 'sm' ? 'h-8' : size === 'lg' ? 'h-12' : 'h-10';

  return (
    <span className={`inline-flex items-center whitespace-nowrap shrink-0 select-none ${className}`}>
      <svg
        viewBox="0 0 370 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${heightClass} w-auto`}
        role="img"
        aria-label="Redline Digital Solution"
      >
        {/* Three horizontal speed bars on left of R */}
        <polygon points="8,18 28,18 25,26 5,26" fill="#E31E24" />
        <polygon points="4,31 25,31 22,39 1,39" fill="#E31E24" />
        <polygon points="0,44 22,44 19,52 -3,52" fill="#E31E24" />

        {/* Red top bar and outer loop/leg of stylized R */}
        <path
          d="M21 8H56C69 8 76 14 74 25C72 34 65 40 55 42L69 68H53L41 44H34L21 8ZM40 19L37 33H50C56 33 60 30 61 25C62 21 59 19 53 19H40Z"
          fill="#E31E24"
        />

        {/* Black diagonal inner stem of R with dynamic slash cutout */}
        <polygon points="27,21 41,21 31,68 16,68" fill={secondaryColor} />
        <polygon points="34,42 45,48 33,66" fill={secondaryColor} opacity="0.85" />

        {/* Primary Wordmark: REDLINE */}
        <text
          x="84"
          y="42"
          fill="#E31E24"
          fontFamily="'Plus Jakarta Sans', sans-serif"
          fontWeight="800"
          fontStyle="italic"
          fontSize="38"
          letterSpacing="1.5"
        >
          REDLINE
        </text>

        {/* Secondary Wordmark: DIGITAL SOLUTION */}
        <text
          x="84"
          y="65"
          fill={secondaryColor}
          fontFamily="'Plus Jakarta Sans', sans-serif"
          fontWeight="800"
          fontStyle="italic"
          fontSize="19.5"
          letterSpacing="2.2"
        >
          DIGITAL SOLUTION
        </text>
      </svg>
    </span>
  );
};

export const PngFlagIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-4' }) => (
  <svg
    viewBox="0 0 36 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block shrink-0 rounded-[2px] shadow-2xs ${className}`}
    role="img"
    aria-label="Flag of Papua New Guinea"
  >
    {/* Lower-left Black Triangle */}
    <polygon points="0,0 0,24 36,24" fill="#111111" />
    {/* Upper-right Red Triangle */}
    <polygon points="0,0 36,0 36,24" fill="#E31E24" />
    {/* Southern Cross White Stars */}
    <circle cx="9" cy="11" r="1.1" fill="#FFFFFF" />
    <circle cx="6" cy="14.5" r="1.1" fill="#FFFFFF" />
    <circle cx="12" cy="14" r="1.1" fill="#FFFFFF" />
    <circle cx="9" cy="19" r="1.1" fill="#FFFFFF" />
    <circle cx="10.8" cy="16.2" r="0.65" fill="#FFFFFF" />
    {/* Golden Kumul Bird of Paradise Silhouette */}
    <path
      d="M23 5.5C24.5 5.5 25.8 6.5 26.5 8C28.2 7.2 30.2 7.5 31.5 8.8C29.8 9.2 28.5 10 27.6 11.2C29.2 12.2 30.8 13.8 31.8 15.8C29.6 14.8 27.8 13.8 26.2 12.6C25.2 13.5 23.8 14 22.2 14C23.2 12.8 23.8 11.5 23.8 10.2C22.4 9.6 21.2 8.5 20.6 7.2C21.6 7.2 22.5 6.5 23 5.5Z"
      fill="#FACC15"
    />
  </svg>
);

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 ${className}`}
    aria-hidden="true"
  >
    <path d="M12.031 2C6.508 2 2.023 6.485 2.023 12.007c0 1.766.461 3.49 1.337 5.01L2 22l5.122-1.343a9.97 9.97 0 0 0 4.909 1.292h.004c5.522 0 10.007-4.485 10.007-10.007C22.042 6.485 17.554 2 12.031 2zm5.826 14.129c-.246.693-1.428 1.326-1.988 1.411-.51.077-1.155.11-1.866-.116-.431-.137-.983-.319-1.693-.626-2.981-1.287-4.928-4.29-5.077-4.489-.148-.198-1.213-1.614-1.213-3.079 0-1.465.768-2.185 1.04-2.483.273-.298.595-.372.793-.372.198 0 .396.002.57.01.183.009.428-.069.669.512.248.595.842 2.059.916 2.208.074.149.124.323.025.521-.099.198-.149.322-.298.496-.148.174-.313.389-.446.521-.149.148-.304.309-.131.607.173.297.769 1.269 1.651 2.055 1.135 1.012 2.091 1.326 2.388 1.475.298.149.471.124.645-.074.173-.199.743-.868.941-1.166.198-.297.397-.248.669-.149.273.099 1.734.818 2.031.967.298.149.496.223.57.347.075.124.075.719-.171 1.412z" />
  </svg>
);
