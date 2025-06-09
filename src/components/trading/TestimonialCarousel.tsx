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
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
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
    return cards.reverse(); // Reverse order to show from right to left
  };

  const renderTitle = (title: string, cardId: string) => {
    if (title.includes("\n")) {
      const lines = title.split("\n");
      return lines.map((line, index) => (
        <span
          key={index}
          style={{
            fontSize: "20px",
          }}
        >
          {line}
          {index < lines.length - 1 && <br />}
        </span>
      ));
    }
    return (
      <span
        style={{ fontSize: "20px", letterSpacing: "0.5px", lineHeight: "32px" }}
      >
        {title}
      </span>
    );
  };

  return (
    <div
      className="w-full py-12 relative overflow-hidden"
      style={{ backgroundColor: "rgb(8, 7, 27)" }}
    >
      {/* Background gradient blur effects */}
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
                "overflow-hidden transition-all duration-500 border-0 shadow-lg hover:scale-105 relative",
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
                <div className="relative overflow-hidden">
                  {/* Hero Background Image for Payout Cards */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        card.id === "2"
                          ? 'linear-gradient(135deg, rgba(10, 124, 255, 0.8), rgba(24, 160, 237, 0.6)), url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
                          : card.id === "3"
                            ? 'linear-gradient(135deg, rgba(34, 197, 94, 0.8), rgba(16, 185, 129, 0.6)), url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M20 20.5a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
                            : 'linear-gradient(135deg, rgba(168, 85, 247, 0.8), rgba(139, 92, 246, 0.6)), url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="3" cy="3" r="3"/%3E%3Ccircle cx="13" cy="13" r="3"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                      backgroundRepeat: "repeat",
                      backgroundSize: "60px 60px",
                    }}
                  />

                  {/* Success/Money Icons for Visual Appeal */}
                  <div className="absolute top-4 right-4 opacity-10">
                    <svg
                      width="80"
                      height="80"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-green-400"
                    >
                      <path
                        d="M12 2L3.09 8.26L12 22L20.91 8.26L12 2Z"
                        fill="currentColor"
                      />
                      <path
                        d="M12 8L8 12H16L12 8Z"
                        fill="rgba(255,255,255,0.3)"
                      />
                    </svg>
                  </div>

                  {/* Trading Chart Pattern in Background */}
                  <div className="absolute bottom-4 left-4 opacity-10">
                    <svg
                      width="100"
                      height="40"
                      viewBox="0 0 100 40"
                      fill="none"
                      className="text-blue-400"
                    >
                      <path
                        d="M0 30 L20 20 L40 25 L60 15 L80 10 L100 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      />
                      <path
                        d="M0 35 L20 25 L40 30 L60 20 L80 15 L100 10"
                        stroke="currentColor"
                        strokeWidth="1"
                        opacity="0.5"
                        fill="none"
                      />
                    </svg>
                  </div>

                  {/* Content with improved spacing */}
                  <div className="relative p-6 z-10">
                    {card.badge && (
                      <Badge
                        className="mb-4 text-xs font-medium border-0 inline-flex items-center"
                        style={{
                          backgroundColor: "rgb(10, 124, 255)",
                          color: "white",
                          borderRadius: "9999px",
                          fontSize: "12px",
                          fontWeight: "500",
                          lineHeight: "16px",
                          paddingTop: "2px",
                          paddingBottom: "2px",
                          paddingLeft: "10px",
                          paddingRight: "10px",
                        }}
                      >
                        {card.badge}
                      </Badge>
                    )}
                    <div className="space-y-2">
                      <h3
                        className="font-bold tracking-wide text-white inline relative z-10"
                        style={{
                          fontSize: "20px",
                          letterSpacing: "0.5px",
                          lineHeight: "32px",
                          fontWeight: "700",
                          textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                        }}
                      >
                        {renderTitle(card.title, card.id)}
                      </h3>
                      <div
                        className="text-4xl font-bold text-white relative z-10"
                        style={{
                          fontSize: "36px",
                          fontWeight: "700",
                          lineHeight: "40px",
                          marginTop: "8px",
                          textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                        }}
                      >
                        <span style={{ fontSize: "20px", fontWeight: "700" }}>
                          {card.amount}
                        </span>{" "}
                        <span
                          className="font-normal"
                          style={{
                            color: "rgb(24, 160, 237)",
                            fontSize: "20px",
                            lineHeight: "32px",
                            fontWeight: "400",
                          }}
                        >
                          {card.subtitle}&nbsp;
                        </span>
                      </div>
                      {card.tags && (
                        <div className="flex gap-2 mt-4 relative z-10">
                          {card.tags.map((tag, tagIndex) => (
                            <Badge
                              key={tagIndex}
                              className="text-xs font-medium border-0"
                              style={{
                                backgroundColor: "rgb(10, 124, 255)",
                                color: "white",
                              }}
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
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
