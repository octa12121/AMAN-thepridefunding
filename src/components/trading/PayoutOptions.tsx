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

export const PayoutOptions = ({
  title,
  options,
  stats,
}: PayoutOptionsProps) => {
  return (
    <div className="w-full py-16 bg-gradient-to-b from-blue-900 to-blue-950 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
        <div className="w-full h-full rounded-full border-2 border-white transform rotate-12" />
      </div>
      <div className="absolute bottom-0 left-0 w-48 h-48 opacity-5">
        <div className="w-full h-full rounded-full bg-white transform -rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-5xl font-bold text-center mb-12">{title}</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {options.map((option) => {
            const Icon =
              iconMap[option.icon as keyof typeof iconMap] || Banknote;

            return (
              <Card
                key={option.id}
                className="bg-blue-800/50 border-blue-700 backdrop-blur-sm p-8 hover:bg-blue-800/70 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 p-3 rounded-full">
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
                    <p className="text-blue-100 mb-4 leading-relaxed">
                      {option.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {option.features.map((feature, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-blue-600/30 text-blue-100 hover:bg-blue-600/50"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mock interface preview */}
                <div className="mt-6 bg-blue-900/50 rounded-lg p-4 border border-blue-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        {option.id === "rise" ? (
                          <RiseworkLogo
                            className="h-3 w-3 text-white"
                            size={12}
                          />
                        ) : (
                          <Icon className="h-3 w-3 text-white" />
                        )}
                      </div>
                      <span className="text-sm text-blue-200">
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
                      <div className="text-sm text-blue-300">
                        {option.id === "rise"
                          ? "Total Amount"
                          : "Crypto Amount"}
                      </div>
                      <div className="text-xl font-bold text-white">
                        {option.id === "rise" ? "$1,325" : "₿1,092"}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-blue-300">
                        {option.id === "rise"
                          ? "Transfer ID"
                          : "Transaction Hash"}
                      </div>
                      <div className="text-xs text-blue-200 font-mono">
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
        <Card className="bg-blue-800/30 border-blue-700 backdrop-blur-sm p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Shield className="h-12 w-12 text-blue-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">
                {stats.payoutFrequency}
              </div>
              <div className="text-blue-300 text-sm">Payout Schedule</div>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-blue-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">
                {stats.avgResponseTime}
              </div>
              <div className="text-blue-300 text-sm">Average Response Time</div>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-blue-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">
                {stats.customerSupport}
              </div>
              <div className="text-blue-300 text-sm">Customer Support</div>
            </div>
            <div className="text-center">
              <DollarSign className="h-12 w-12 text-blue-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">
                {stats.totalPaidOut}
              </div>
              <div className="text-blue-300 text-sm">Total Paid Out</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
