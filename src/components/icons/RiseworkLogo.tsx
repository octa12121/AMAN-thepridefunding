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
      {/* Rise logo gradient - exact colors */}
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

      {/* Perfect circle background */}
      <circle cx="50" cy="50" r="50" fill="url(#riseGradient)" />

      {/* Rise arrow - clean stroke version matching the logo exactly */}
      <g
        stroke="white"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        {/* Main diagonal line */}
        <line x1="30" y1="70" x2="70" y2="30" />

        {/* Arrow head - horizontal line */}
        <line x1="55" y1="30" x2="70" y2="30" />

        {/* Arrow head - vertical line */}
        <line x1="70" y1="30" x2="70" y2="45" />
      </g>
    </svg>
  );
};

// Alternative filled version
export const RiseworkLogoFilled = ({
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
          id="riseGradientFilled"
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

      <circle cx="50" cy="50" r="50" fill="url(#riseGradientFilled)" />

      {/* Arrow as filled paths */}
      <g fill="white">
        {/* Diagonal arrow shaft */}
        <path d="M27 73 L73 27 L73 33 L33 73 Z" />

        {/* Arrow head horizontal */}
        <rect x="55" y="27" width="18" height="6" />

        {/* Arrow head vertical */}
        <rect x="67" y="27" width="6" height="18" />
      </g>
    </svg>
  );
};

// Simple CSS version for perfect rendering at any size
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
        width={size * 0.6}
        height={size * 0.6}
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
