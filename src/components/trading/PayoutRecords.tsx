import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { PayoutRecord } from "@/lib/trading-config";
import { useCounter } from "@/hooks/use-counter";
import { cn } from "@/lib/utils";

interface PayoutRecordsProps {
  records: PayoutRecord[];
}

export const PayoutRecords = ({ records }: PayoutRecordsProps) => {
  const [showAll, setShowAll] = useState(false);

  // Animated counters like aurapips.com
  const tradersCounter = useCounter({ end: 1240, duration: 2500, suffix: "+" });
  const rewardedCounter = useCounter({ end: 890, duration: 2800, suffix: "+" });
  const processedCounter = useCounter({
    end: 2156,
    duration: 3000,
    suffix: "+",
  });

  // Duplicate records for seamless infinite scroll
  const duplicatedRecords = [...records, ...records, ...records];

  return (
    <div
      className="w-full py-16 relative overflow-hidden"
      style={{ backgroundColor: "rgb(8, 7, 27)" }}
    >
      {/* Background gradient blur effects */}
      <div className="absolute top-1/4 left-1/5 w-96 h-96 opacity-15">
        <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500 blur-3xl" />
      </div>
      <div className="absolute bottom-1/4 right-1/5 w-80 h-80 opacity-20">
        <div className="w-full h-full rounded-full bg-gradient-to-l from-cyan-400 to-blue-600 blur-3xl" />
      </div>
      <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 w-64 h-64 opacity-10">
        <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Rewarding Our Best Traders
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            On average our full-time traders have a monthly reward rate of 8.1%.
            You receive up to 90% of those rewards.
          </p>
        </div>

        {/* Animated Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div
              ref={tradersCounter.ref}
              className="text-4xl font-bold text-white mb-2 transition-all duration-300 hover:scale-110"
            >
              {tradersCounter.value}
            </div>
            <div className="text-gray-400">Pride Funding Traders</div>
          </div>
          <div className="text-center">
            <div
              ref={rewardedCounter.ref}
              className="text-4xl font-bold text-white mb-2 transition-all duration-300 hover:scale-110"
            >
              {rewardedCounter.value}
            </div>
            <div className="text-gray-400">Rewarded Traders</div>
          </div>
          <div className="text-center">
            <div
              ref={processedCounter.ref}
              className="text-4xl font-bold text-white mb-2 transition-all duration-300 hover:scale-110"
            >
              {processedCounter.value}
            </div>
            <div className="text-gray-400">Processed Rewards</div>
          </div>
        </div>

        {/* Continuous Scroll Slider */}
        {!showAll ? (
          <div className="relative">
            {/* Top Row - Left to Right */}
            <div className="mb-6 overflow-hidden">
              <div
                className="flex gap-4 animate-scroll-left"
                style={{
                  width: "calc(300px * 48)", // Width for seamless scroll
                  animation: "scrollLeft 60s linear infinite",
                }}
              >
                {duplicatedRecords.map((record, index) => (
                  <Card
                    key={`top-${record.id}-${index}`}
                    className="border-0 backdrop-blur-sm p-4 hover:scale-105 transition-all duration-300 group flex-shrink-0 w-72"
                    style={{
                      backgroundColor: "rgba(42, 43, 49, 0.41)",
                      borderColor: "rgba(132, 154, 170, 0.52)",
                    }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      {/* Enhanced Avatar with Bitmoji */}
                      <div className="relative">
                        <Avatar
                          className="h-10 w-10 border-2"
                          style={{ borderColor: "rgb(10, 124, 255)" }}
                        >
                          {record.avatar ? (
                            <AvatarImage src={record.avatar} />
                          ) : null}
                          <AvatarFallback
                            className="text-white text-sm"
                            style={{ backgroundColor: "rgb(24, 160, 237)" }}
                          >
                            {record.bitmoji ? (
                              <span className="text-lg">{record.bitmoji}</span>
                            ) : (
                              record.trader
                                .split(" ")
                                .map((n) => n[0])
                                .join("")
                            )}
                          </AvatarFallback>
                        </Avatar>

                        {/* Country flag overlay */}
                        <div
                          className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs border-2 border-gray-800"
                          style={{ backgroundColor: "rgba(8, 7, 27, 0.9)" }}
                        >
                          {record.flag}
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="text-2xl font-bold text-green-400 mb-1">
                          {record.amount}
                        </div>
                        <div className="text-sm text-gray-300 truncate">
                          {record.trader}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{record.flag}</span>
                        <span className="text-xs text-gray-400">
                          {record.country}
                        </span>
                      </div>
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Bottom Row - Right to Left */}
            <div className="overflow-hidden">
              <div
                className="flex gap-4 animate-scroll-right"
                style={{
                  width: "calc(300px * 48)", // Width for seamless scroll
                  animation: "scrollRight 60s linear infinite",
                }}
              >
                {duplicatedRecords
                  .slice()
                  .reverse()
                  .map((record, index) => (
                    <Card
                      key={`bottom-${record.id}-${index}`}
                      className="border-0 backdrop-blur-sm p-4 hover:scale-105 transition-all duration-300 group flex-shrink-0 w-72"
                      style={{
                        backgroundColor: "rgba(42, 43, 49, 0.41)",
                        borderColor: "rgba(132, 154, 170, 0.52)",
                      }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        {/* Enhanced Avatar with Bitmoji */}
                        <div className="relative">
                          <Avatar
                            className="h-10 w-10 border-2"
                            style={{ borderColor: "rgb(10, 124, 255)" }}
                          >
                            {record.avatar ? (
                              <AvatarImage src={record.avatar} />
                            ) : null}
                            <AvatarFallback
                              className="text-white text-sm"
                              style={{ backgroundColor: "rgb(24, 160, 237)" }}
                            >
                              {record.bitmoji ? (
                                <span className="text-lg">
                                  {record.bitmoji}
                                </span>
                              ) : (
                                record.trader
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")
                              )}
                            </AvatarFallback>
                          </Avatar>

                          {/* Country flag overlay */}
                          <div
                            className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs border-2 border-gray-800"
                            style={{ backgroundColor: "rgba(8, 7, 27, 0.9)" }}
                          >
                            {record.flag}
                          </div>
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="text-2xl font-bold text-green-400 mb-1">
                            {record.amount}
                          </div>
                          <div className="text-sm text-gray-300 truncate">
                            {record.trader}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{record.flag}</span>
                          <span className="text-xs text-gray-400">
                            {record.country}
                          </span>
                        </div>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      </div>
                    </Card>
                  ))}
              </div>
            </div>

            {/* Gradient Overlays for smooth edges */}
            <div
              className="absolute left-0 top-0 bottom-0 w-20 pointer-events-none z-10"
              style={{
                background:
                  "linear-gradient(to right, rgb(8, 7, 27), transparent)",
              }}
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-20 pointer-events-none z-10"
              style={{
                background:
                  "linear-gradient(to left, rgb(8, 7, 27), transparent)",
              }}
            />
          </div>
        ) : (
          /* Static Grid View */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {records.map((record, index) => (
              <Card
                key={record.id}
                className={cn(
                  "border-0 backdrop-blur-sm p-4 hover:scale-105 transition-all duration-300 group",
                  "animate-in fade-in slide-in-from-bottom-4",
                )}
                style={{
                  backgroundColor: "rgba(42, 43, 49, 0.41)",
                  borderColor: "rgba(132, 154, 170, 0.52)",
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  {/* Enhanced Avatar with Bitmoji */}
                  <div className="relative">
                    <Avatar
                      className="h-10 w-10 border-2"
                      style={{ borderColor: "rgb(10, 124, 255)" }}
                    >
                      {record.avatar ? (
                        <AvatarImage src={record.avatar} />
                      ) : null}
                      <AvatarFallback
                        className="text-white text-sm"
                        style={{ backgroundColor: "rgb(24, 160, 237)" }}
                      >
                        {record.bitmoji ? (
                          <span className="text-lg">{record.bitmoji}</span>
                        ) : (
                          record.trader
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                        )}
                      </AvatarFallback>
                    </Avatar>

                    {/* Country flag overlay */}
                    <div
                      className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs border-2 border-gray-800"
                      style={{ backgroundColor: "rgba(8, 7, 27, 0.9)" }}
                    >
                      {record.flag}
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="text-2xl font-bold text-green-400 mb-1">
                      {record.amount}
                    </div>
                    <div className="text-sm text-gray-300 truncate">
                      {record.trader}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{record.flag}</span>
                    <span className="text-xs text-gray-400">
                      {record.country}
                    </span>
                  </div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Toggle Button */}
        <div className="text-center mt-12">
          <Button
            onClick={() => setShowAll(!showAll)}
            variant="outline"
            className="border-0 text-white hover:scale-105 px-8 py-3 text-lg transition-all duration-300"
            style={{
              backgroundColor: showAll
                ? "rgba(42, 43, 49, 0.61)"
                : "rgb(10, 124, 255)",
              borderColor: "rgba(132, 154, 170, 0.52)",
              color: "white",
            }}
          >
            {showAll ? "View Scroll Animation" : "View All Payouts"}
          </Button>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes scrollRight {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scrollLeft 60s linear infinite;
        }

        .animate-scroll-right {
          animation: scrollRight 60s linear infinite;
        }

        /* Pause animation on hover */
        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};
