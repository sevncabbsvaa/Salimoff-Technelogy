type LogoProps = {
  size?: number;
  withText?: boolean;
  textClassName?: string;
  className?: string;
};

export default function Logo({ size = 32, withText = true, textClassName = "text-[17px]", className = "" }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 text-text ${className}`}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="logoBlueGrad" x1="100" y1="20" x2="100" y2="185" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#60A5FA" />
            <stop offset="0.5" stopColor="#3B82F6" />
            <stop offset="1" stopColor="#2563EB" />
          </linearGradient>
          <linearGradient id="logoSilverGrad" x1="0" y1="60" x2="0" y2="185" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#CBD5E1" />
            <stop offset="1" stopColor="#94A3B8" />
          </linearGradient>
        </defs>

        <g stroke="url(#logoSilverGrad)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round">
          <path className="branch branch-left" d="M66 168 V120 L57 108 V98" />
          <circle className="node node-left" cx="57" cy="86" r="9" strokeWidth="6.5" />
        </g>

        <g stroke="url(#logoSilverGrad)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round">
          <path className="branch branch-right" d="M134 168 V126 L143 114 V92" />
          <circle className="node node-right" cx="143" cy="80" r="9" strokeWidth="6.5" />
        </g>

        <g stroke="url(#logoBlueGrad)" strokeLinecap="round">
          <path className="stem" d="M100 168 V58" strokeWidth="10" />
          <circle className="node node-top" cx="100" cy="42" r="12" strokeWidth="8" />
        </g>

        <g strokeLinecap="round">
          <path className="base base-upper-l" d="M44 168 H88" stroke="url(#logoSilverGrad)" strokeWidth="7" />
          <path className="base base-upper-r" d="M112 168 H156" stroke="url(#logoSilverGrad)" strokeWidth="7" />
          <path className="base base-lower" d="M64 183 H136" stroke="url(#logoBlueGrad)" strokeWidth="7" />
        </g>
      </svg>
      {withText && (
        <span className={`font-heading font-bold tracking-[0.02em] ${textClassName}`}>
          SALIMOFF<span className="text-accent-light">&nbsp;TECHNOLOGY</span>
        </span>
      )}
    </span>
  );
}
