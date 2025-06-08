import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PayoutRecord } from "@/lib/trading-config";
import { cn } from "@/lib/utils";

interface PayoutRecordsProps {
  records: PayoutRecord[];
}

export const PayoutRecords = ({ records }: PayoutRecordsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const cardsPerView = 4; // Number of cards to show at once
  const maxIndex = Math.max(0, records.length - cardsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Auto-slide functionality
  useEffect(() => {
    if (!showAll) {
      const interval = setInterval(nextSlide, 3000);
      return () => clearInterval(interval);
    }
  }, [showAll, maxIndex]);

  const getVisibleRecords = () => {
    if (showAll) {
      return records;
    }
    return records.slice(currentIndex, currentIndex + cardsPerView);
  };

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
        {/* Slider Header */}
        {!showAll && (
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">
                Recent Payouts
              </h2>
              <p className="text-gray-400">
                Live payout updates from our traders
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full border-0 hover:scale-110 transition-all duration-300"
                style={{
                  backgroundColor: "rgba(42, 43, 49, 0.41)",
                  borderColor: "rgba(132, 154, 170, 0.52)",
                  color: "rgb(10, 124, 255)",
                }}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full border-0 hover:scale-110 transition-all duration-300"
                style={{
                  backgroundColor: "rgba(42, 43, 49, 0.41)",
                  borderColor: "rgba(132, 154, 170, 0.52)",
                  color: "rgb(10, 124, 255)",
                }}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {/* Slider Container */}
        <div className="relative overflow-hidden">
          <div
            className={cn(
              "transition-transform duration-500 ease-in-out",
              showAll
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
                : "flex gap-4",
            )}
            style={{
              transform: showAll
                ? "none"
                : `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
            }}
          >
            {(showAll ? records : getVisibleRecords()).map((record, index) => (
              <Card
                key={record.id}
                className={cn(
                  "border-0 backdrop-blur-sm p-4 hover:scale-105 transition-all duration-300 group flex-shrink-0",
                  "animate-in fade-in slide-in-from-bottom-4",
                  !showAll && "w-1/4",
                )}
                style={{
                  backgroundColor: "rgba(42, 43, 49, 0.41)",
                  borderColor: "rgba(132, 154, 170, 0.52)",
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Avatar
                    className="h-10 w-10 border-2"
                    style={{ borderColor: "rgb(10, 124, 255)" }}
                  >
                    <AvatarImage src={record.avatar} />
                    <AvatarFallback
                      className="text-white text-sm"
                      style={{ backgroundColor: "rgb(24, 160, 237)" }}
                    >
                      {record.trader
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
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

        {/* Pagination Dots */}
        {!showAll && records.length > cardsPerView && (
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  currentIndex === index
                    ? "bg-blue-500 w-6"
                    : "bg-gray-600 hover:bg-gray-500",
                )}
              />
            ))}
          </div>
        )}

        {/* Toggle Button */}
        <div className="text-center mt-8">
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
            {showAll ? "Show Slider" : "View All Payouts"}
          </Button>
        </div>
      </div>
    </div>
  );
};
