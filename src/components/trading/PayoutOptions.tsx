import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Banknote,
  Bitcoin,
  CheckCircle,
  Copy,
  ExternalLink,
} from "lucide-react";
import { RiseworkLogo } from "@/components/icons/RiseworkLogo";
import {
  AnimatedShieldIcon,
  AnimatedClockIcon,
  AnimatedUsersIcon,
  AnimatedDollarIcon,
  AnimatedIconStyles,
} from "@/components/icons/Animated3DIcons";
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
      {/* Include animated icon styles */}
      <AnimatedIconStyles />

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
                  <div className="p-3 rounded-full group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: option.icon === 'crypto' ? 'rgba(239, 95, 13, 1)' : 'rgb(10, 124, 255)' }}>
                    {option.icon === 'bank' ? (
                      <RiseworkLogo className="h-8 w-8 text-white" size={32} />
                    ) : (
                      <Icon className="h-8 w-8 text-white" />
                    )}
                  </div>
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

                {/* Standardized Transaction Screenshot Container */}
                <div
                  className="mt-6 rounded-lg border backdrop-blur-sm overflow-hidden h-80"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.3)",
                    borderColor: "rgba(132, 154, 170, 0.3)",
                  }}
                >
                  {option.id === "rise" ? (
                    <>
                      {/* Rise Transaction Header */}
                      <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3 border-b border-blue-500/30 h-14 flex items-center">
                        <div className="flex items-center justify-between w-full">
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

                      {/* Rise Transaction Content */}
                      <div className="p-4 flex-1 h-52 flex flex-col justify-between">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-400 text-sm">
                              Transaction ID
                            </span>
                            <span className="text-white text-sm font-mono">
                              #RSE789456
                            </span>
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="text-gray-400 text-sm">
                              Amount
                            </span>
                            <span className="text-green-400 text-lg font-bold">
                              $2,847.50
                            </span>
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="text-gray-400 text-sm">
                              Recipient
                            </span>
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
                            <span className="text-gray-400 text-sm">
                              Status
                            </span>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                              <span className="text-green-400 text-sm font-medium">
                                Completed
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Processing Time */}
                        <div className="pt-3 border-t border-gray-600/30">
                          <div className="flex items-center gap-2">
                            <AnimatedClockIcon size={16} />
                            <span className="text-blue-400 text-xs">
                              Processed in 2.3 seconds
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="bg-gradient-to-r from-green-900/20 to-green-800/20 px-4 py-2 border-t border-green-600/20 h-10 flex items-center justify-center">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-400" />
                          <span className="text-green-400 text-xs font-medium">
                            Verified & Secure Transfer
                          </span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Crypto Transaction Header */}
                      <div className="bg-gradient-to-r from-orange-600 to-orange-700 px-4 py-3 border-b border-orange-500/30 h-14 flex items-center">
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center gap-2">
                            <Bitcoin className="h-5 w-5 text-white" />
                            <span className="text-white font-semibold text-sm">
                              Bitcoin Transfer
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                            <span className="text-orange-200 text-xs">
                              Confirmed
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Crypto Transaction Content */}
                      <div className="p-4 flex-1 h-52 flex flex-col justify-between">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-400 text-sm">
                              Transaction Hash
                            </span>
                            <div className="flex items-center gap-2">
                              <span className="text-white text-xs font-mono">
                                7a9b...c4e1
                              </span>
                              <Copy className="h-3 w-3 text-gray-400 hover:text-white cursor-pointer" />
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="text-gray-400 text-sm">
                              Amount
                            </span>
                            <div className="text-right">
                              <div className="text-orange-400 text-lg font-bold">
                                ₿0.06847
                              </div>
                              <div className="text-gray-400 text-xs">
                                ≈ $2,847.50 USD
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="text-gray-400 text-sm">
                              To Address
                            </span>
                            <div className="flex items-center gap-2">
                              <span className="text-white text-xs font-mono">
                                bc1q...7x8z
                              </span>
                              <Copy className="h-3 w-3 text-gray-400 hover:text-white cursor-pointer" />
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="text-gray-400 text-sm">
                              Network Fee
                            </span>
                            <span className="text-white text-sm">
                              ₿0.00012 ($5.02)
                            </span>
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="text-gray-400 text-sm">
                              Confirmations
                            </span>
                            <span className="text-green-400 text-sm font-medium">
                              6/6
                            </span>
                          </div>
                        </div>

                        {/* Transaction Time */}
                        <div className="pt-3 border-t border-gray-600/30">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-400 text-xs">
                              Dec 15, 2024 14:28:42 UTC
                            </span>
                            <ExternalLink className="h-3 w-3 text-gray-400 hover:text-white cursor-pointer" />
                          </div>
                        </div>
                      </div>

                      {/* Crypto Footer */}
                      <div className="bg-gradient-to-r from-orange-900/20 to-orange-800/20 px-4 py-2 border-t border-orange-600/20 h-10 flex items-center justify-center">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-orange-400" />
                          <span className="text-orange-400 text-xs font-medium">
                            Blockchain Verified • Immutable
                          </span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Stats section with 3D animated icons */}
        <Card
          className="border-0 backdrop-blur-sm p-8"
          style={{
            backgroundColor: "rgba(42, 43, 49, 0.41)",
            borderColor: "rgba(132, 154, 170, 0.52)",
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="mx-auto mb-3">
                <AnimatedShieldIcon size={48} />
              </div>
              <div className="text-2xl font-bold text-white mb-1">
                {stats.payoutFrequency}
              </div>
              <div className="text-gray-400 text-sm">Payout Schedule</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="mx-auto mb-3">
                <AnimatedClockIcon size={48} />
              </div>
              <div
                ref={responseTimeCounter.ref}
                className="text-2xl font-bold text-white mb-1 transition-all duration-300"
              >
                {responseTimeCounter.value}
              </div>
              <div className="text-gray-400 text-sm">Average Response Time</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="mx-auto mb-3">
                <AnimatedUsersIcon size={48} />
              </div>
              <div className="text-2xl font-bold text-white mb-1">
                {stats.customerSupport}
              </div>
              <div className="text-gray-400 text-sm">Customer Support</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="mx-auto mb-3">
                <AnimatedDollarIcon size={48} />
              </div>
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