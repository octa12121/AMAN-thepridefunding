import { useState } from "react";
import { TestimonialCarousel } from "@/components/trading/TestimonialCarousel";
import { PayoutOptions } from "@/components/trading/PayoutOptions";
import { PayoutRecords } from "@/components/trading/PayoutRecords";
import { ContentEditor } from "@/components/trading/ContentEditor";
import { tradingConfig, TradingConfig } from "@/lib/trading-config";

const Index = () => {
  const [config, setConfig] = useState<TradingConfig>(tradingConfig);

  const handleConfigUpdate = (newConfig: TradingConfig) => {
    setConfig(newConfig);
    // Here you could also save to localStorage, API, etc.
    localStorage.setItem("tradingConfig", JSON.stringify(newConfig));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Testimonials */}
      <TestimonialCarousel
        testimonials={config.testimonials}
        title={config.hero.title}
        subtitle={config.hero.subtitle}
      />

      {/* Payout Options Section */}
      <PayoutOptions
        title={config.payoutOptions.title}
        options={config.payoutOptions.options}
        stats={config.stats}
      />

      {/* Payout Records Grid */}
      <PayoutRecords records={config.payoutRecords} />

      {/* Content Editor (Floating Action Button) */}
      <ContentEditor config={config} onUpdate={handleConfigUpdate} />
    </div>
  );
};

export default Index;
