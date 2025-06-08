import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Banknote,
  Bitcoin,
  Shield,
  Clock,
  Users,
  DollarSign,
} from "lucide-react";
import { RiseworkLogo } from "@/components/icons/RiseworkLogo";
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

                {/* Mock interface preview */}
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
                        {option.id === "rise" ? (
                          <RiseworkLogo
                            className="h-3 w-3 text-white"
                            size={12}
                          />
                        ) : (
                          <Icon className="h-3 w-3 text-white" />
                        )}
                      </div>
                      <span className="text-sm text-gray-300">
                        {option.id === "rise"
                          ? "Risework Transfer"
                          : "Crypto Wallet"}
                      </span>
                    </div>
                    <span className="text-xs text-green-400 bg-green-400/20 px-2 py-1 rounded">
                      {option.id === "rise"
                        ? "Payout completed"
                        : "Transfer confirmed"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm text-gray-400">
                        {option.id === "rise"
                          ? "Total Amount"
                          : "Crypto Amount"}
                      </div>
                      <div className="text-xl font-bold text-white">
                        {option.id === "rise" ? "$1,325" : "₿1,092"}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">
                        {option.id === "rise"
                          ? "Transfer ID"
                          : "Transaction Hash"}
                      </div>
                      <div className="text-xs text-gray-300 font-mono">
                        {option.id === "rise" ? "TXN789456" : "0x7a9b...c4e1"}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Stats section */}
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
              <div className="text-2xl font-bold text-white mb-1">
                {stats.avgResponseTime}
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
              <div className="text-2xl font-bold text-white mb-1">
                {stats.totalPaidOut}
              </div>
              <div className="text-gray-400 text-sm">Total Paid Out</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
