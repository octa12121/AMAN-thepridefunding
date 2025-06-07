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
      {/* Risework-inspired logo design */}
      {/* Background circle */}
      <circle cx="50" cy="50" r="45" fill="currentColor" opacity="0.1" />

      {/* Main "R" letterform */}
      <path
        d="M25 25 L25 75 M25 25 L45 25 C52 25 55 28 55 35 C55 42 52 45 45 45 L25 45 M45 45 L55 75"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Upward arrow/growth symbol */}
      <path
        d="M65 65 L65 35 M60 40 L65 35 L70 40"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Connection dots representing network/finance */}
      <circle cx="75" cy="50" r="2" fill="currentColor" />
      <circle cx="82" cy="42" r="1.5" fill="currentColor" />
      <circle cx="82" cy="58" r="1.5" fill="currentColor" />

      {/* Connecting lines */}
      <path
        d="M77 50 L80 42 M77 50 L80 58"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.6"
      />
    </svg>
  );
};

// Alternative simplified version
export const RiseworkLogoSimple = ({
  className,
  size = 32,
}: RiseworkLogoProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("", className)}
    >
      {/* Simplified "Rise" concept with upward trend */}
      <rect x="5" y="30" width="6" height="8" rx="1" fill="currentColor" />
      <rect x="13" y="25" width="6" height="13" rx="1" fill="currentColor" />
      <rect x="21" y="20" width="6" height="18" rx="1" fill="currentColor" />
      <rect x="29" y="15" width="6" height="23" rx="1" fill="currentColor" />

      {/* Arrow pointing up */}
      <path
        d="M32 12 L32 8 M29 10 L32 7 L35 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
