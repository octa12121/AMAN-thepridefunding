// Editable configuration for the trading platform
// Modify these values to update the homepage content

export interface TestimonialCard {
  id: string;
  type: "payout" | "testimonial";
  amount?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  badge?: string;
  tags?: string[];
}

export interface PayoutOption {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface PayoutRecord {
  id: string;
  amount: string;
  trader: string;
  country: string;
  flag: string;
  avatar?: string;
  bitmoji?: string;
}

export interface TradingConfig {
  hero: {
    title: string;
    subtitle: string;
  };
  testimonials: TestimonialCard[];
  payoutOptions: {
    title: string;
    options: PayoutOption[];
  };
  stats: {
    payoutFrequency: string;
    avgResponseTime: string;
    customerSupport: string;
    totalPaidOut: string;
  };
  payoutRecords: PayoutRecord[];
}

export const tradingConfig: TradingConfig = {
  hero: {
    title: "Trusted By Traders Worldwide",
    subtitle:
      "Hear directly from traders who have profited with The-pridefunding.com. Real stories, real results!",
  },
  testimonials: [
    {
      id: "1",
      type: "testimonial",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fb95b103977f2407bb010a0781b2ea96c%2Fae544c3a04934552a9ad6bb235800a12",
      description: "Great platform for trading",
    },
    {
      id: "2",
      type: "payout",
      amount: "$5125",
      title: "MY PAYOUT",
      subtitle: "first payout",
      badge: "THE-PRIDE FUNDING TESTIMONIAL",
      tags: ["Wizense G", "MUMBAI"],
    },
    {
      id: "3",
      type: "payout",
      amount: "$3,100",
      title: "FAILED 9TIMES BEFORE\nMY 1ST PAYOUT",
      subtitle: "first payout",
      tags: ["Matthew", "CANADA"],
    },
  ],
  payoutOptions: {
    title: "Flexible & Secure Payout Options",
    options: [
      {
        id: "rise",
        title: "Payout with Rise",
        description:
          "Our partnership with Rise ensures secure, reliable bank transfers — profits go straight to your account through their trusted infrastructure.",
        icon: "bank",
        features: [
          "Secure bank transfers",
          "Direct to account",
          "Trusted infrastructure",
        ],
      },
      {
        id: "crypto",
        title: "Payout with crypto",
        description:
          "Get your trading profits your way -\n we support both Bitcoin and major stablecoins for universal accessibility.",
        icon: "crypto",
        features: [
          "Bitcoin support",
          "Major stablecoins",
          "Universal accessibility",
        ],
      },
    ],
  },
  stats: {
    payoutFrequency: "Bi-weekly payouts",
    avgResponseTime: "4H",
    customerSupport: "24/7",
    totalPaidOut: "$35K+",
  },
  payoutRecords: [
    {
      id: "1",
      amount: "$1,292.52",
      trader: "Gabriel Hayes",
      country: "USA",
      flag: "🇺🇸",
      bitmoji: "👨🏻‍💼",
    },
    {
      id: "2",
      amount: "$556.25",
      trader: "Marko",
      country: "Belgium",
      flag: "🇧🇪",
      bitmoji: "👨🏼‍💻",
    },
    {
      id: "3",
      amount: "$85.00",
      trader: "Theo Laurent",
      country: "France",
      flag: "🇫🇷",
      bitmoji: "👨🏻‍🎨",
    },
    {
      id: "4",
      amount: "$144.50",
      trader: "Aryan Smith",
      country: "USA",
      flag: "🇺🇸",
      bitmoji: "👨🏽‍🔬",
    },
    {
      id: "5",
      amount: "$739.88",
      trader: "Javier Martín",
      country: "Spain",
      flag: "🇪🇸",
      bitmoji: "👨🏻‍🏫",
    },
    {
      id: "6",
      amount: "$510.00",
      trader: "Marko",
      country: "Belgium",
      flag: "🇧🇪",
      bitmoji: "👨🏼‍💻",
    },
    {
      id: "7",
      amount: "$625.03",
      trader: "Diego Ramirez",
      country: "Spain",
      flag: "🇪🇸",
      bitmoji: "👨🏽‍⚕️",
    },
    {
      id: "8",
      amount: "$1596.00",
      trader: "Ardan Syah",
      country: "Albania",
      flag: "🇦🇱",
      bitmoji: "👨🏻‍💼",
    },
    {
      id: "9",
      amount: "$935.00",
      trader: "Diego",
      country: "India",
      flag: "🇮🇳",
      bitmoji: "👨🏽‍🔧",
    },
    {
      id: "10",
      amount: "$279.00",
      trader: "Marko",
      country: "Belgium",
      flag: "🇧🇪",
      bitmoji: "👨🏼‍💻",
    },
    {
      id: "11",
      amount: "$88.00",
      trader: "Luka",
      country: "Belgium",
      flag: "🇧🇪",
      bitmoji: "👨🏼‍🎓",
    },
    {
      id: "12",
      amount: "$382.52",
      trader: "Javier Martín",
      country: "India",
      flag: "🇮🇳",
      bitmoji: "👨🏻‍🏫",
    },
    {
      id: "13",
      amount: "$291.09",
      trader: "Diego",
      country: "USA",
      flag: "🇺🇸",
      bitmoji: "👨🏽‍🔧",
    },
    {
      id: "14",
      amount: "$400.00",
      trader: "Elena",
      country: "Russia",
      flag: "🇷🇺",
      bitmoji: "👩🏻‍💻",
    },
    {
      id: "15",
      amount: "$5,112.00",
      trader: "Marcus",
      country: "Germany",
      flag: "🇩🇪",
      bitmoji: "👨🏼‍💼",
    },
    {
      id: "16",
      amount: "$1,450.03",
      trader: "Sophie",
      country: "Canada",
      flag: "🇨🇦",
      bitmoji: "👩🏻‍🎨",
    },
  ],
};

// Helper function to update configuration
export const updateTradingConfig = (
  updates: Partial<TradingConfig>,
): TradingConfig => {
  return { ...tradingConfig, ...updates };
};
