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
    <div className="w-full py-16 bg-gradient-to-b from-blue-950 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
          {displayedRecords.map((record, index) => (
            <Card
              key={record.id}
              className={cn(
                "bg-blue-900/40 border-blue-800/50 backdrop-blur-sm p-4 hover:bg-blue-900/60 transition-all duration-300 hover:scale-105",
                "animate-in fade-in slide-in-from-bottom-4",
                index > 11 && "delay-100",
              )}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Avatar className="h-10 w-10 border-2 border-blue-600">
                  <AvatarImage src={record.avatar} />
                  <AvatarFallback className="bg-blue-700 text-white text-sm">
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
                  <div className="text-sm text-blue-200 truncate">
                    {record.trader}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{record.flag}</span>
                  <span className="text-xs text-blue-300">
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
              className="border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg"
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
              className="border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg"
            >
              Show Less
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
