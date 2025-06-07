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
          <stop offset="30%" style={{ stopColor: "#8b5cf6", stopOpacity: 1 }} />
          <stop offset="70%" style={{ stopColor: "#6366f1", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#3b82f6", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>

      {/* Circle background */}
      <circle cx="50" cy="50" r="50" fill="url(#riseGradient)" />

      {/* Rise arrow - exact proportions */}
      <g fill="white">
        {/* Main diagonal arrow body */}
        <path d="M24 76 L76 24 L76 32 L32 76 Z" fillRule="evenodd" />

        {/* Horizontal arrow head part */}
        <rect x="56" y="24" width="20" height="8" />

        {/* Vertical arrow head part */}
        <rect x="68" y="24" width="8" height="20" />
      </g>
    </svg>
  );
};

// Alternative clean version
export const RiseworkLogoAlt = ({
  className,
  size = 32,
}: RiseworkLogoProps) => {
  return (
    <div
      className={cn("rounded-full relative overflow-hidden", className)}
      style={{
        width: size,
        height: size,
        background:
          "linear-gradient(135deg, #a855f7 0%, #8b5cf6 30%, #6366f1 70%, #3b82f6 100%)",
      }}
    >
      {/* Arrow using CSS shapes for crisp rendering */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          style={{
            width: "52%",
            height: "52%",
            position: "relative",
          }}
        >
          {/* Diagonal line */}
          <div
            style={{
              position: "absolute",
              width: "8px",
              height: "100%",
              background: "white",
              transform: "rotate(45deg)",
              transformOrigin: "center",
              left: "50%",
              top: "0%",
              marginLeft: "-4px",
            }}
          />

          {/* Arrow head horizontal */}
          <div
            style={{
              position: "absolute",
              width: "40%",
              height: "8px",
              background: "white",
              right: "0%",
              top: "0%",
            }}
          />

          {/* Arrow head vertical */}
          <div
            style={{
              position: "absolute",
              width: "8px",
              height: "40%",
              background: "white",
              right: "0%",
              top: "0%",
            }}
          />
        </div>
      </div>
    </div>
  );
};

// Simple SVG version for consistency
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
