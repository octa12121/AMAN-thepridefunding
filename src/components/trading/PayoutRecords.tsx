import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { PayoutRecord } from "@/lib/trading-config";
import { cn } from "@/lib/utils";

interface PayoutRecordsProps {
  records: PayoutRecord[];
}

export const PayoutRecords = ({ records }: PayoutRecordsProps) => {
  const [showAll, setShowAll] = useState(false);
  const displayedRecords = showAll ? records : records.slice(0, 12);

  return (
    <div
      className="w-full py-16 relative overflow-hidden"
      style={{ backgroundColor: "rgb(8, 7, 27)" }}
    >
      {/* Background gradient blur effects like thepride-funding.com */}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
          {displayedRecords.map((record, index) => (
            <Card
              key={record.id}
              className={cn(
                "border-0 backdrop-blur-sm p-4 hover:scale-105 transition-all duration-300 group",
                "animate-in fade-in slide-in-from-bottom-4",
                index > 11 && "delay-100",
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

        {!showAll && records.length > 12 && (
          <div className="text-center">
            <Button
              onClick={() => setShowAll(true)}
              variant="outline"
              className="border-0 text-white hover:scale-105 px-8 py-3 text-lg transition-all duration-300"
              style={{
                backgroundColor: "rgb(10, 124, 255)",
                color: "white",
              }}
            >
              See More
            </Button>
          </div>
        )}

        {showAll && (
          <div className="text-center">
            <Button
              onClick={() => setShowAll(false)}
              variant="outline"
              className="border-0 text-white hover:scale-105 px-8 py-3 text-lg transition-all duration-300"
              style={{
                backgroundColor: "rgba(42, 43, 49, 0.61)",
                borderColor: "rgba(132, 154, 170, 0.52)",
                color: "white",
              }}
            >
              Show Less
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
