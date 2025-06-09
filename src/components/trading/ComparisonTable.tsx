import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, X, Star, Trophy, Target, DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";

interface ComparisonItem {
  feature: string;
  prideFunding: string | boolean;
  ftmo: string | boolean;
  fundedNext: string | boolean;
  fundingPips: string | boolean;
  highlight?: boolean;
}

const comparisonData: ComparisonItem[] = [
  {
    feature: "Max Drawdown",
    prideFunding: "10%",
    ftmo: "10%",
    fundedNext: "8%",
    fundingPips: "8%",
    highlight: true,
  },
  {
    feature: "Daily Drawdown",
    prideFunding: "5%",
    ftmo: "5%",
    fundedNext: "4%",
    fundingPips: "4%",
  },
  {
    feature: "Profit Target (Phase 1)",
    prideFunding: "8%",
    ftmo: "8%",
    fundedNext: "8%",
    fundingPips: "8%",
  },
  {
    feature: "Profit Target (Phase 2)",
    prideFunding: "5%",
    ftmo: "5%",
    fundedNext: "5%",
    fundingPips: "5%",
  },
  {
    feature: "Profit Split",
    prideFunding: "Up to 90%",
    ftmo: "80%",
    fundedNext: "80%",
    fundingPips: "80%",
    highlight: true,
  },
  {
    feature: "Payout Frequency",
    prideFunding: "Bi-weekly",
    ftmo: "Monthly",
    fundedNext: "Monthly",
    fundingPips: "Monthly",
    highlight: true,
  },
  {
    feature: "Average Payout Time",
    prideFunding: "24 Hours",
    ftmo: "1-3 Days",
    fundedNext: "2-5 Days",
    fundingPips: "3-7 Days",
    highlight: true,
  },
  {
    feature: "EA Trading",
    prideFunding: true,
    ftmo: false,
    fundedNext: true,
    fundingPips: false,
    highlight: true,
  },
  {
    feature: "News Trading",
    prideFunding: true,
    ftmo: false,
    fundedNext: false,
    fundingPips: false,
    highlight: true,
  },
  {
    feature: "Weekend Holding",
    prideFunding: true,
    ftmo: true,
    fundedNext: false,
    fundingPips: true,
  },
  {
    feature: "Minimum Trading Days",
    prideFunding: "No Limit",
    ftmo: "4 Days",
    fundedNext: "5 Days",
    fundingPips: "4 Days",
    highlight: true,
  },
  {
    feature: "Maximum Trading Days",
    prideFunding: "Unlimited",
    ftmo: "Unlimited",
    fundedNext: "Unlimited",
    fundingPips: "Unlimited",
  },
  {
    feature: "Copy Trading",
    prideFunding: true,
    ftmo: false,
    fundedNext: false,
    fundingPips: false,
    highlight: true,
  },
  {
    feature: "Scaling Plan",
    prideFunding: "25% every 4 months",
    ftmo: "10% every 4 months",
    fundedNext: "20% every 4 months",
    fundingPips: "10% every 6 months",
    highlight: true,
  },
  {
    feature: "Refund on First Payout",
    prideFunding: true,
    ftmo: true,
    fundedNext: false,
    fundingPips: false,
  },
];

const renderValue = (
  value: string | boolean,
  isPrideFunding: boolean = false,
) => {
  if (typeof value === "boolean") {
    return value ? (
      <div className="flex items-center justify-center">
        <Check
          className={cn(
            "h-5 w-5",
            isPrideFunding ? "text-green-400" : "text-green-500",
          )}
        />
      </div>
    ) : (
      <div className="flex items-center justify-center">
        <X className="h-5 w-5 text-red-400" />
      </div>
    );
  }
  return (
    <span
      className={cn(
        "font-medium",
        isPrideFunding ? "text-white" : "text-gray-300",
      )}
    >
      {value}
    </span>
  );
};

export const ComparisonTable = () => {
  return (
    <div
      className="w-full py-12 relative overflow-hidden"
      style={{ backgroundColor: "rgb(8, 7, 27)" }}
    >
      {/* Background effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 opacity-10">
        <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-3xl" />
      </div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 opacity-15">
        <div className="w-full h-full rounded-full bg-gradient-to-l from-cyan-400 to-blue-600 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-400 px-3 py-1.5 rounded-full text-xs font-medium mb-4">
            <Trophy className="h-3.5 w-3.5" />
            Comparison Analysis
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">
            Why Choose The-Pride Funding?
          </h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            See how we compare against the industry's leading prop trading
            firms. We're committed to providing the best trading conditions and
            fastest payouts.
          </p>
        </div>

        {/* Comparison Table */}
        <Card
          className="overflow-hidden border-0 backdrop-blur-sm"
          style={{
            backgroundColor: "rgba(42, 43, 49, 0.41)",
            borderColor: "rgba(132, 154, 170, 0.52)",
          }}
        >
          {/* Table Header */}
          <div className="grid grid-cols-5 gap-3 p-4 border-b border-gray-600/30">
            <div className="text-gray-400 font-semibold text-xs uppercase tracking-wide">
              Features
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white px-3 py-2 rounded-lg mb-1 relative shadow-2xl shadow-blue-500/30 border border-blue-400/30">
                <div className="absolute -top-1 -right-1 animate-pulse">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 drop-shadow-lg" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-lg blur-sm"></div>
                <div className="relative">
                  <div className="font-bold text-sm">The Pride Funding</div>
                  <div className="text-xs opacity-90 text-blue-100">
                    Best Choice
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-700/80 text-gray-300 px-3 py-2 rounded-lg">
                <div className="font-semibold text-sm">FTMO</div>
                <div className="text-xs opacity-70">Traditional</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-700/80 text-gray-300 px-3 py-2 rounded-lg">
                <div className="font-semibold text-sm">FundedNext</div>
                <div className="text-xs opacity-70">Popular</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-700/80 text-gray-300 px-3 py-2 rounded-lg">
                <div className="font-semibold text-sm">FundingPips</div>
                <div className="text-xs opacity-70">Alternative</div>
              </div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-600/30">
            {comparisonData.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "grid grid-cols-5 gap-3 p-3 hover:bg-blue-900/10 transition-all duration-200",
                  item.highlight && "bg-blue-900/5 border-l-2 border-blue-500",
                )}
              >
                <div className="flex items-center gap-2">
                  <span className="text-white font-medium text-sm">
                    {item.feature}
                  </span>
                  {item.highlight && (
                    <Badge className="bg-blue-600/20 text-blue-400 text-xs px-2 py-0.5">
                      Advantage
                    </Badge>
                  )}
                </div>

                <div className="text-center bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-lg py-2 px-2 border border-blue-500/40 shadow-lg shadow-blue-500/10 relative">
                  <div className="absolute inset-0 bg-blue-400/5 rounded-lg"></div>
                  <div className="relative">
                    {renderValue(item.prideFunding, true)}
                  </div>
                </div>

                <div className="text-center py-2 px-2 bg-gray-700/10 rounded">
                  {renderValue(item.ftmo)}
                </div>

                <div className="text-center py-2 px-2 bg-gray-700/10 rounded">
                  {renderValue(item.fundedNext)}
                </div>

                <div className="text-center py-2 px-2 bg-gray-700/10 rounded">
                  {renderValue(item.fundingPips)}
                </div>
              </div>
            ))}
          </div>

          {/* Table Footer */}
          <div className="bg-gradient-to-r from-blue-900/20 to-blue-800/20 p-6 border-t border-blue-600/30">
            <div className="grid grid-cols-5 gap-4 items-center">
              <div className="text-gray-400 font-semibold">Overall Rating</div>

              <div className="text-center">
                <div className="flex justify-center mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-5 w-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                  <Target className="h-4 w-4 mr-2" />
                  Get Funded
                </Button>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-2">
                  {[1, 2, 3, 4].map((star) => (
                    <Star
                      key={star}
                      className="h-5 w-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                  <Star className="h-5 w-5 text-gray-400" />
                </div>
                <div className="text-gray-400 text-sm">4.0/5</div>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-2">
                  {[1, 2, 3].map((star) => (
                    <Star
                      key={star}
                      className="h-5 w-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                  {[4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-gray-400" />
                  ))}
                </div>
                <div className="text-gray-400 text-sm">3.5/5</div>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-2">
                  {[1, 2, 3].map((star) => (
                    <Star
                      key={star}
                      className="h-5 w-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                  {[4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-gray-400" />
                  ))}
                </div>
                <div className="text-gray-400 text-sm">3.0/5</div>
              </div>
            </div>
          </div>
        </Card>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/30 rounded-2xl p-8 border border-blue-600/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of successful traders who chose The-Pride Funding
              for faster payouts, better conditions, and superior support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                <DollarSign className="h-5 w-5 mr-2" />
                Start Challenge
              </Button>
              <Button
                variant="outline"
                className="border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
