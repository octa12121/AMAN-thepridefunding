import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TestimonialCard } from "@/lib/trading-config";
import { cn } from "@/lib/utils";

interface TestimonialCarouselProps {
  testimonials: TestimonialCard[];
  title: string;
  subtitle: string;
}

export const TestimonialCarousel = ({
  testimonials,
  title,
  subtitle,
}: TestimonialCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      cards.push(testimonials[index]);
    }
    return cards;
  };

  return (
    <div className="w-full py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-2">{title}</h2>
            <p className="text-gray-600">{subtitle}</p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full border-gray-300 hover:border-blue-600"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full border-gray-300 hover:border-blue-600"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {getVisibleCards().map((card, index) => (
            <Card
              key={`${card.id}-${currentIndex}`}
              className={cn(
                "overflow-hidden transition-all duration-500 border-0 shadow-lg",
                card.type === "payout"
                  ? "bg-gradient-to-br from-blue-900 to-blue-800 text-white"
                  : "bg-white",
              )}
            >
              {card.type === "testimonial" ? (
                <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden relative">
                  <img
                    src={card.image || "/placeholder.svg"}
                    alt="Testimonial"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
              ) : (
                <div className="p-6">
                  {card.badge && (
                    <Badge className="mb-4 bg-blue-600 hover:bg-blue-700 text-xs font-medium">
                      {card.badge}
                    </Badge>
                  )}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold tracking-wide">
                      {card.title}
                    </h3>
                    <div className="text-4xl font-bold">
                      {card.amount}{" "}
                      <span className="text-sm font-normal">
                        {card.subtitle}
                      </span>
                    </div>
                    {card.tags && (
                      <div className="flex gap-2 mt-4">
                        {card.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-sm opacity-80 flex items-center gap-1"
                          >
                            {tag === "Texas" && "🤠"} {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
