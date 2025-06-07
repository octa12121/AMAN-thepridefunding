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
      {/* Exact gradient from the Rise logo */}
      <defs>
        <linearGradient id="riseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#8b5cf6", stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: "#6366f1", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#3b82f6", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>

      {/* Perfect circle background */}
      <circle cx="50" cy="50" r="50" fill="url(#riseGradient)" />

      {/* White arrow exactly like in the Rise logo */}
      <g
        stroke="white"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        {/* Diagonal line from bottom-left to top-right */}
        <path d="M28 72 L72 28" />

        {/* Horizontal line forming the arrow head */}
        <path d="M55 28 L72 28" />

        {/* Vertical line forming the arrow head */}
        <path d="M72 28 L72 45" />
      </g>
    </svg>
  );
};

// CSS-based version for perfect rendering
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
          "linear-gradient(135deg, #8b5cf6 0%, #6366f1 50%, #3b82f6 100%)",
      }}
    >
      {/* Arrow using absolute positioning for pixel-perfect alignment */}
      <div
        className="absolute"
        style={{
          top: "20%",
          left: "20%",
          width: "60%",
          height: "60%",
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            stroke="white"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          >
            <path d="M15 85 L85 15" />
            <path d="M60 15 L85 15" />
            <path d="M85 15 L85 40" />
          </g>
        </svg>
      </div>
    </div>
  );
};

// Simplified version using a single arrow icon
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
          "linear-gradient(135deg, #8b5cf6 0%, #6366f1 50%, #3b82f6 100%)",
      }}
    >
      <svg
        width={size * 0.5}
        height={size * 0.5}
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
