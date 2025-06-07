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
      {/* Gradient definitions matching the exact Rise logo colors */}
      <defs>
        <radialGradient id="riseGradient" cx="30%" cy="30%" r="80%">
          <stop offset="0%" style={{ stopColor: "#8b5cf6", stopOpacity: 1 }} />
          <stop offset="40%" style={{ stopColor: "#6366f1", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#3b82f6", stopOpacity: 1 }}
          />
        </radialGradient>
      </defs>

      {/* Main circular background */}
      <circle cx="50" cy="50" r="50" fill="url(#riseGradient)" />

      {/* White arrow design exactly matching the Rise logo */}
      <g>
        {/* Main diagonal arrow line */}
        <path
          d="M25 75 L75 25"
          stroke="white"
          strokeWidth="8"
          strokeLinecap="round"
        />

        {/* Arrow head - top horizontal line */}
        <path
          d="M55 25 L75 25"
          stroke="white"
          strokeWidth="8"
          strokeLinecap="round"
        />

        {/* Arrow head - right vertical line */}
        <path
          d="M75 25 L75 45"
          stroke="white"
          strokeWidth="8"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

// Alternative with exact proportions
export const RiseworkLogoAlt = ({
  className,
  size = 32,
}: RiseworkLogoProps) => {
  return (
    <div
      className={cn(
        "rounded-full flex items-center justify-center relative overflow-hidden",
        className,
      )}
      style={{
        width: size,
        height: size,
        background:
          "radial-gradient(circle at 30% 30%, #8b5cf6 0%, #6366f1 40%, #3b82f6 100%)",
      }}
    >
      {/* Arrow using CSS for perfect positioning */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          width={size * 0.7}
          height={size * 0.7}
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
    </div>
  );
};

// Simple version for small icons
export const RiseworkLogoSimple = ({
  className,
  size = 32,
}: RiseworkLogoProps) => {
  return (
    <div
      className={cn("rounded-full", className)}
      style={{
        width: size,
        height: size,
        background:
          "linear-gradient(135deg, #8b5cf6 0%, #6366f1 50%, #3b82f6 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "60%",
          height: "60%",
          background: "white",
          clipPath:
            "polygon(0% 100%, 70% 30%, 70% 60%, 85% 60%, 85% 15%, 40% 15%, 40% 30%, 0% 70%)",
        }}
      />
    </div>
  );
};
