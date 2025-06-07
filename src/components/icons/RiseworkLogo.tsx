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
      {/* Gradient background circle matching the Rise logo */}
      <defs>
        <linearGradient id="riseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#6366f1", stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: "#8b5cf6", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#3b82f6", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>

      {/* Main circular background */}
      <circle cx="50" cy="50" r="45" fill="url(#riseGradient)" />

      {/* White arrow pointing up and to the right */}
      <path
        d="M30 65 L65 30 M65 30 L65 50 M65 30 L45 30"
        stroke="white"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Additional arrow head for emphasis */}
      <path d="M50 35 L65 30 L60 45" fill="white" />
    </svg>
  );
};

// Alternative version with exact arrow from the image
export const RiseworkLogoAlt = ({
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
      {/* Gradient background */}
      <defs>
        <radialGradient id="riseRadialGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" style={{ stopColor: "#8b5cf6", stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: "#6366f1", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#3b82f6", stopOpacity: 1 }}
          />
        </radialGradient>
      </defs>

      {/* Main circle */}
      <circle cx="50" cy="50" r="45" fill="url(#riseRadialGradient)" />

      {/* Arrow design matching the Rise logo */}
      <g transform="translate(50,50)">
        {/* Arrow body */}
        <path
          d="M-15 10 L12 -12"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Arrow head */}
        <path
          d="M5 -12 L12 -12 L12 -5"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>
    </svg>
  );
};

// Simple version that closely matches the provided image
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
          "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #3b82f6 100%)",
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
