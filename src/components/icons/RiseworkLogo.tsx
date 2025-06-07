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
      {/* Exact Rise logo gradient from the image */}
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

      {/* Rise arrow - exact proportions from the image */}
      <g
        stroke="white"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        {/* Main diagonal line from bottom-left to top-right */}
        <path d="M28 72 L72 28" />

        {/* Arrow head - horizontal line */}
        <path d="M55 28 L72 28" />

        {/* Arrow head - vertical line */}
        <path d="M72 28 L72 45" />
      </g>
    </svg>
  );
};

// Alternative version for better small size rendering
export const RiseworkLogoClean = ({
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
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        >
          <path d="M7 17L17 7" />
          <path d="M10 7h7v7" />
        </g>
      </svg>
    </div>
  );
};

// Simplified version that works well at any size
export const RiseworkLogoSimple = ({
  className,
  size = 32,
}: RiseworkLogoProps) => {
  const iconSize = Math.max(12, size * 0.5);

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
        width={iconSize}
        height={iconSize}
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
