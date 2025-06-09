import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Banknote,
  Bitcoin,
  Shield,
  Clock,
  Users,
  DollarSign,
  CheckCircle,
} from "lucide-react";
import { RiseworkLogo } from "@/components/icons/RiseworkLogo";
import { useCounter } from "@/hooks/use-counter";
import { PayoutOption } from "@/lib/trading-config";

interface PayoutOptionsProps {
  title: string;
  options: PayoutOption[];
  stats: {
    payoutFrequency: string;
    avgResponseTime: string;
    customerSupport: string;
    totalPaidOut: string;
  };
}

const iconMap = {
  bank: RiseworkLogo,
  crypto: Bitcoin,
};

const renderDescription = (description: string) => {
  if (description.includes("\n")) {
    return description.split("\n").map((line, index) => (
      <span key={index}>
        {index > 0 && (
          <>
            <br />
            &nbsp;
          </>
        )}
        {line}
      </span>
    ));
  }
  return description;
};

export const PayoutOptions = ({
  title,
  options,
  stats,
}: PayoutOptionsProps) => {
  // Animated counters for numerical stats - slower speeds
  const responseTimeCounter = useCounter({
    end: 4,
    duration: 3500,
    suffix: "H",
  });
  const totalPaidCounter = useCounter({
    end: 35,
    duration: 4000,
    prefix: "$",
    suffix: "K+",
  });

  return (
    <div
      className="w-full py-16 relative overflow-hidden"
      style={{ backgroundColor: "rgb(8, 7, 27)" }}
    >
      {/* Background gradient blur effects like thepride-funding.com */}
      <div className="absolute top-0 left-1/4 w-96 h-96 opacity-20">
        <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 blur-3xl" />
      </div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 opacity-15">
        <div className="w-full h-full rounded-full bg-gradient-to-l from-purple-500 to-blue-600 blur-3xl" />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-10">
        <div className="w-full h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-5xl font-bold text-center mb-12 text-white">
          {title}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {options.map((option) => {
            const Icon =
              iconMap[option.icon as keyof typeof iconMap] || Banknote;

            return (
              <Card
                key={option.id}
                className="border-0 backdrop-blur-sm p-8 hover:scale-105 transition-all duration-300 group"
                style={{
                  backgroundColor: "rgba(42, 43, 49, 0.41)",
                  borderColor: "rgba(132, 154, 170, 0.52)",
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="p-3 rounded-full group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: "rgb(10, 124, 255)" }}
                  >
                    {option.icon === "bank" ? (
                      <RiseworkLogo className="h-8 w-8 text-white" size={32} />
                    ) : (
                      <Icon className="h-8 w-8 text-white" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-white">
                      {option.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed text-lg">
                      {renderDescription(option.description)}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {option.features.map((feature, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-white hover:scale-105 transition-transform duration-200"
                          style={{
                            backgroundColor: "rgb(24, 160, 237)",
                            color: "white",
                          }}
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Compact Transaction Screenshot */}
                {option.id === "rise" ? (
                  <div
                    className="mt-6 rounded-lg border backdrop-blur-sm overflow-hidden"
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.3)",
                      borderColor: "rgba(132, 154, 170, 0.3)",
                    }}
                  >
                    {/* Transaction Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3 border-b border-blue-500/30">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <RiseworkLogo
                            className="h-5 w-5 text-white"
                            size={20}
                          />
                          <span className="text-white font-semibold text-sm">
                            Rise Transfer
                          </span>
                        </div>
                        <CheckCircle className="h-4 w-4 text-green-400" />
                      </div>
                    </div>

                    {/* Transaction Details */}
                    <div className="p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">
                          Transaction ID
                        </span>
                        <span className="text-white text-sm font-mono">
                          #RSE789456
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">Amount</span>
                        <span className="text-green-400 text-lg font-bold">
                          $2,847.50
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">Recipient</span>
                        <span className="text-white text-sm">
                          John Trader ****2847
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">Date</span>
                        <span className="text-white text-sm">
                          Dec 15, 2024 14:32
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">Status</span>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-green-400 text-sm font-medium">
                            Completed
                          </span>
                        </div>
                      </div>

                      {/* Processing Time */}
                      <div className="mt-4 pt-3 border-t border-gray-600/30">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-blue-400" />
                          <span className="text-blue-400 text-xs">
                            Processed in 2.3 seconds
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="bg-gradient-to-r from-green-900/20 to-green-800/20 px-4 py-2 border-t border-green-600/20">
                      <div className="flex items-center gap-2 justify-center">
                        <CheckCircle className="h-3 w-3 text-green-400" />
                        <span className="text-green-400 text-xs font-medium">
                          Verified & Secure Transfer
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Original Mock interface preview for crypto */
                  <div
                    className="mt-6 rounded-lg p-4 border backdrop-blur-sm"
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.3)",
                      borderColor: "rgba(132, 154, 170, 0.3)",
                    }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-6 h-6 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: "rgb(10, 124, 255)" }}
                        >
                          <Icon className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-sm text-gray-300">
                          Crypto Wallet
                        </span>
                      </div>
                      <span className="text-xs text-green-400 bg-green-400/20 px-2 py-1 rounded">
                        Transfer confirmed
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-sm text-gray-400">
                          Crypto Amount
                        </div>
                        <div className="text-xl font-bold text-white">
                          ₿1,092
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">
                          Transaction Hash
                        </div>
                        <div className="text-xs text-gray-300 font-mono">
                          0x7a9b...c4e1
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            );
          })}
        </div>

        {/* Stats section with animated counters */}
        <Card
          className="border-0 backdrop-blur-sm p-8"
          style={{
            backgroundColor: "rgba(42, 43, 49, 0.41)",
            borderColor: "rgba(132, 154, 170, 0.52)",
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <Shield
                className="h-12 w-12 mx-auto mb-3"
                style={{ color: "rgb(24, 160, 237)" }}
              />
              <div className="text-2xl font-bold text-white mb-1">
                {stats.payoutFrequency}
              </div>
              <div className="text-gray-400 text-sm">Payout Schedule</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <Clock
                className="h-12 w-12 mx-auto mb-3"
                style={{ color: "rgb(24, 160, 237)" }}
              />
              <div
                ref={responseTimeCounter.ref}
                className="text-2xl font-bold text-white mb-1 transition-all duration-300"
              >
                {responseTimeCounter.value}
              </div>
              <div className="text-gray-400 text-sm">Average Response Time</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <Users
                className="h-12 w-12 mx-auto mb-3"
                style={{ color: "rgb(24, 160, 237)" }}
              />
              <div className="text-2xl font-bold text-white mb-1">
                {stats.customerSupport}
              </div>
              <div className="text-gray-400 text-sm">Customer Support</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <DollarSign
                className="h-12 w-12 mx-auto mb-3"
                style={{ color: "rgb(24, 160, 237)" }}
              />
              <div
                ref={totalPaidCounter.ref}
                className="text-2xl font-bold text-white mb-1 transition-all duration-300"
              >
                {totalPaidCounter.value}
              </div>
              <div className="text-gray-400 text-sm">Total Paid Out</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
