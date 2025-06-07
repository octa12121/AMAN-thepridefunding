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

      {/* Rise arrow - exact design from the logo */}
      <g stroke="white" fill="white">
        {/* Main diagonal arrow shaft */}
        <path d="M25 75 L70 30 L70 40 L35 75 Z" strokeWidth="0" />

        {/* Arrow head - horizontal part */}
        <rect x="55" y="25" width="20" height="10" strokeWidth="0" />

        {/* Arrow head - vertical part */}
        <rect x="65" y="25" width="10" height="25" strokeWidth="0" />
      </g>
    </svg>
  );
};

// Clean stroke-based version
export const RiseworkLogoStroke = ({
  className,
  size = 32,
}: RiseworkLogoProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("", className)}
    >
      <defs>
        <linearGradient
          id="riseGradientStroke"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" style={{ stopColor: "#a855f7", stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: "#6366f1", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#3b82f6", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>

      <circle cx="50" cy="50" r="50" fill="url(#riseGradientStroke)" />

      {/* Clean arrow using strokes */}
      <g
        stroke="white"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        <path d="M28 72 L72 28" />
        <path d="M55 28 L72 28" />
        <path d="M72 28 L72 45" />
      </g>
    </svg>
  );
};

// Simple version for small sizes
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
        width={size * 0.55}
        height={size * 0.55}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 17L17 7M17 7H10M17 7V14"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
