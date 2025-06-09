import { cn } from "@/lib/utils";

interface AnimatedIconProps {
  className?: string;
  size?: number;
}

// 3D Animated Shield Icon
export const AnimatedShieldIcon = ({
  className,
  size = 48,
}: AnimatedIconProps) => {
  return (
    <div
      className={cn("relative inline-block animate-float", className)}
      style={{ width: size, height: size }}
    >
      <div className="relative w-full h-full transform-gpu animate-rotate-3d">
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className="absolute inset-0 drop-shadow-lg"
        >
          {/* Shield gradient background */}
          <defs>
            <linearGradient
              id="shield-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#3b82f6", stopOpacity: 1 }}
              />
              <stop
                offset="50%"
                style={{ stopColor: "#1e40af", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#1e3a8a", stopOpacity: 1 }}
              />
            </linearGradient>
            <filter id="shield-glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
            fill="url(#shield-gradient)"
            stroke="rgb(24, 160, 237)"
            strokeWidth="2"
            filter="url(#shield-glow)"
            className="animate-pulse-glow"
          />
        </svg>

        {/* 3D depth effect */}
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className="absolute inset-0 transform translate-x-1 translate-y-1 opacity-30"
        >
          <path
            d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
            fill="#0f172a"
          />
        </svg>
      </div>
    </div>
  );
};

// 3D Animated Clock Icon
export const AnimatedClockIcon = ({
  className,
  size = 48,
}: AnimatedIconProps) => {
  return (
    <div
      className={cn("relative inline-block animate-float", className)}
      style={{ width: size, height: size, animationDelay: "0.5s" }}
    >
      <div className="relative w-full h-full transform-gpu animate-rotate-3d">
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className="absolute inset-0 drop-shadow-lg"
        >
          <defs>
            <radialGradient id="clock-gradient">
              <stop
                offset="0%"
                style={{ stopColor: "#60a5fa", stopOpacity: 1 }}
              />
              <stop
                offset="70%"
                style={{ stopColor: "#2563eb", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#1e40af", stopOpacity: 1 }}
              />
            </radialGradient>
          </defs>

          <circle
            cx="12"
            cy="12"
            r="10"
            fill="url(#clock-gradient)"
            stroke="rgb(24, 160, 237)"
            strokeWidth="2"
            className="animate-pulse-glow"
          />

          {/* Clock hands with animation */}
          <g className="animate-tick">
            <polyline
              points="12 6 12 12 16 14"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
          </g>
        </svg>

        {/* 3D depth */}
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className="absolute inset-0 transform translate-x-1 translate-y-1 opacity-30"
        >
          <circle cx="12" cy="12" r="10" fill="#0f172a" />
        </svg>
      </div>
    </div>
  );
};

// 3D Animated Users Icon
export const AnimatedUsersIcon = ({
  className,
  size = 48,
}: AnimatedIconProps) => {
  return (
    <div
      className={cn("relative inline-block animate-float", className)}
      style={{ width: size, height: size, animationDelay: "1s" }}
    >
      <div className="relative w-full h-full transform-gpu animate-rotate-3d">
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className="absolute inset-0 drop-shadow-lg"
        >
          <defs>
            <linearGradient
              id="users-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#06b6d4", stopOpacity: 1 }}
              />
              <stop
                offset="50%"
                style={{ stopColor: "#0891b2", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#0e7490", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>

          <g
            fill="url(#users-gradient)"
            stroke="rgb(24, 160, 237)"
            strokeWidth="2"
          >
            <path
              d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
              className="animate-bounce-subtle"
            />
            <circle cx="9" cy="7" r="4" className="animate-pulse-glow" />
            <path
              d="M22 21v-2a4 4 0 0 0-3-3.87"
              className="animate-bounce-subtle"
            />
            <path
              d="M16 3.13a4 4 0 0 1 0 7.75"
              className="animate-bounce-subtle"
            />
          </g>
        </svg>

        {/* 3D depth */}
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className="absolute inset-0 transform translate-x-1 translate-y-1 opacity-30"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" fill="#0f172a" />
          <circle cx="9" cy="7" r="4" fill="#0f172a" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" fill="#0f172a" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" fill="#0f172a" />
        </svg>
      </div>
    </div>
  );
};

// 3D Animated Dollar Icon
export const AnimatedDollarIcon = ({
  className,
  size = 48,
}: AnimatedIconProps) => {
  return (
    <div
      className={cn("relative inline-block animate-float", className)}
      style={{ width: size, height: size, animationDelay: "1.5s" }}
    >
      <div className="relative w-full h-full transform-gpu animate-rotate-3d">
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className="absolute inset-0 drop-shadow-lg"
        >
          <defs>
            <linearGradient
              id="dollar-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#10b981", stopOpacity: 1 }}
              />
              <stop
                offset="50%"
                style={{ stopColor: "#059669", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#047857", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>

          <g stroke="rgb(24, 160, 237)" strokeWidth="2" fill="none">
            <line
              x1="12"
              x2="12"
              y1="2"
              y2="22"
              stroke="url(#dollar-gradient)"
              className="animate-pulse-glow"
            />
            <path
              d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
              stroke="url(#dollar-gradient)"
              className="animate-money-flow"
            />
          </g>
        </svg>

        {/* 3D depth */}
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className="absolute inset-0 transform translate-x-1 translate-y-1 opacity-30"
        >
          <line
            x1="12"
            x2="12"
            y1="2"
            y2="22"
            stroke="#0f172a"
            strokeWidth="2"
          />
          <path
            d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
            stroke="#0f172a"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
};

// CSS animations
export const AnimatedIconStyles = () => (
  <style jsx global>{`
    @keyframes float {
      0%,
      100% {
        transform: translateY(0px) rotateX(0deg);
      }
      50% {
        transform: translateY(-8px) rotateX(5deg);
      }
    }

    @keyframes rotate-3d {
      0% {
        transform: rotateY(0deg) rotateX(0deg);
      }
      25% {
        transform: rotateY(5deg) rotateX(2deg);
      }
      50% {
        transform: rotateY(0deg) rotateX(0deg);
      }
      75% {
        transform: rotateY(-5deg) rotateX(-2deg);
      }
      100% {
        transform: rotateY(0deg) rotateX(0deg);
      }
    }

    @keyframes pulse-glow {
      0%,
      100% {
        filter: drop-shadow(0 0 5px rgba(24, 160, 237, 0.5));
      }
      50% {
        filter: drop-shadow(0 0 15px rgba(24, 160, 237, 0.8));
      }
    }

    @keyframes tick {
      0%,
      100% {
        transform: rotate(0deg);
      }
      50% {
        transform: rotate(6deg);
      }
    }

    @keyframes bounce-subtle {
      0%,
      100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-2px);
      }
    }

    @keyframes money-flow {
      0%,
      100% {
        stroke-dashoffset: 0;
      }
      50% {
        stroke-dashoffset: 10;
      }
    }

    .animate-float {
      animation: float 3s ease-in-out infinite;
    }

    .animate-rotate-3d {
      animation: rotate-3d 6s ease-in-out infinite;
      transform-style: preserve-3d;
    }

    .animate-pulse-glow {
      animation: pulse-glow 2s ease-in-out infinite;
    }

    .animate-tick {
      animation: tick 1s ease-in-out infinite;
      transform-origin: 12px 12px;
    }

    .animate-bounce-subtle {
      animation: bounce-subtle 2s ease-in-out infinite;
    }

    .animate-money-flow {
      animation: money-flow 3s ease-in-out infinite;
      stroke-dasharray: 5;
    }
  `}</style>
);
