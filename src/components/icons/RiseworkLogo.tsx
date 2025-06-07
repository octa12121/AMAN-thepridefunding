import { cn } from "@/lib/utils";

interface RiseworkLogoProps {
  className?: string;
  size?: number;
}

export const RiseworkLogo = ({ className, size = 32 }: RiseworkLogoProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("", className)}
    >
      {/* Exact Rise logo gradient */}
      <defs>
        <linearGradient id="riseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#a855f7", stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: "#6366f1", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#3b82f6", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>

      {/* Perfect circle */}
      <circle cx="50" cy="50" r="50" fill="url(#riseGradient)" />

      {/* Rise arrow - matching exact proportions from image */}
      <g
        stroke="white"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        {/* Main diagonal line */}
        <path d="M29 71 L71 29" />

        {/* Arrow head horizontal */}
        <path d="M57 29 L71 29" />

        {/* Arrow head vertical */}
        <path d="M71 29 L71 43" />
      </g>
    </svg>
  );
};

// CSS-based version for perfect rendering at all sizes
export const RiseworkLogoCSS = ({
  className,
  size = 32,
}: RiseworkLogoProps) => {
  return (
    <div
      className={cn("rounded-full relative", className)}
      style={{
        width: size,
        height: size,
        background:
          "linear-gradient(135deg, #a855f7 0%, #6366f1 50%, #3b82f6 100%)",
      }}
    >
      <svg
        className="absolute inset-0"
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          stroke="white"
          strokeWidth="5.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        >
          <path d="M29 71 L71 29" />
          <path d="M57 29 L71 29" />
          <path d="M71 29 L71 43" />
        </g>
      </svg>
    </div>
  );
};

// Ultra-simple version using standard arrow icon
export const RiseworkLogoSimple = ({
  className,
  size = 32,
}: RiseworkLogoProps) => {
  return (
    <div
      className={cn("rounded-full flex items-center justify-center", className)}
      style={{
        width: size,
        height: size,
        background:
          "linear-gradient(135deg, #a855f7 0%, #6366f1 50%, #3b82f6 100%)",
      }}
    >
      <svg
        width={size * 0.5}
        height={size * 0.5}
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 17L17 7" />
        <path d="M10 7h7v7" />
      </svg>
    </div>
  );
};
