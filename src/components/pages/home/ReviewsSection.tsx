"use client";

import { Button } from "@/components/ui/button";
import { Typography } from "@/components/typography/typography";
import { reviewsData } from "@/dummyData/reviewsData";
import ReviewCard from "@/components/cards/ReviewCard";
import useMediaQuery from "@/hooks/useMediaQuery";

export default function ReviewsSection() {
  const isMobile = useMediaQuery("(max-width: 1023px)");

  const visibleReviews = isMobile
    ? reviewsData.slice(0, 1)
    : reviewsData;

  return (
    <section className="section-container pt-[24px] pb-[46px] lg:py-[128px]">
      <div className="flex items-center justify-between mb-5 lg:mb-12">
        <Typography variant="h2-display" className="lg:uppercase">
          Reviews
        </Typography>

        <Button className="text-white">
          SEE ALL
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {visibleReviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
}