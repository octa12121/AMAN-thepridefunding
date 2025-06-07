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
    <div
      className="w-full py-12 relative overflow-hidden"
      style={{ backgroundColor: "rgb(8, 7, 27)" }}
    >
      {/* Background gradient blur effects like thepride-funding.com */}
      <div className="absolute top-0 right-1/3 w-96 h-96 opacity-20">
        <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 blur-3xl" />
      </div>
      <div className="absolute bottom-0 left-1/3 w-80 h-80 opacity-15">
        <div className="w-full h-full rounded-full bg-gradient-to-l from-purple-500 to-blue-600 blur-3xl" />
      </div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 opacity-10">
        <div className="w-full h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-4xl font-bold mb-2 text-white">{title}</h2>
            <p className="text-gray-300 text-lg">{subtitle}</p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full border-0 hover:scale-110 transition-all duration-300"
              style={{
                backgroundColor: "rgba(42, 43, 49, 0.41)",
                borderColor: "rgba(132, 154, 170, 0.52)",
                color: "rgb(10, 124, 255)",
              }}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full border-0 hover:scale-110 transition-all duration-300"
              style={{
                backgroundColor: "rgba(42, 43, 49, 0.41)",
                borderColor: "rgba(132, 154, 170, 0.52)",
                color: "rgb(10, 124, 255)",
              }}
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
                "overflow-hidden transition-all duration-500 border-0 shadow-lg hover:scale-105",
                card.type === "payout" ? "text-white" : "",
              )}
              style={{
                backgroundColor:
                  card.type === "payout"
                    ? "rgba(42, 43, 49, 0.61)"
                    : "rgba(42, 43, 49, 0.41)",
                borderColor: "rgba(132, 154, 170, 0.52)",
                backdropFilter: "blur(8px)",
              }}
            >
              {card.type === "testimonial" ? (
                <div
                  className="aspect-video rounded-lg overflow-hidden relative"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                >
                  <img
                    src={card.image || "/placeholder.svg"}
                    alt="Testimonial"
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute -inset-2 bg-black/20"
                    style={{
                      backgroundImage: card.image
                        ? `url(${card.image})`
                        : undefined,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  />
                </div>
              ) : (
                <div className="p-6">
                  {card.badge && (
                    <Badge
                      className="mb-4 text-xs font-medium border-0"
                      style={{
                        backgroundColor: "rgb(10, 124, 255)",
                        color: "white",
                      }}
                    >
                      {card.badge}
                    </Badge>
                  )}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold tracking-wide text-white">
                      {card.title}
                    </h3>
                    <div className="text-4xl font-bold text-white">
                      {card.amount}{" "}
                      <span
                        className={cn(
                          "font-normal",
                          card.amount === "$5125" ? "text-2xl" : "text-sm",
                        )}
                        style={{ color: "rgb(24, 160, 237)" }}
                      >
                        {card.subtitle}
                      </span>
                    </div>
                    {card.tags && (
                      <div className="flex gap-2 mt-4">
                        {card.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-sm opacity-80 flex items-center gap-1 text-gray-300"
                          >
                            {(tag === "Texas" || tag === "MUMBAUI") && "🤠"}{" "}
                            {tag}
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
