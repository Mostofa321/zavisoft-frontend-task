"use client";

import { useState, useCallback, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { chunkArray, cn } from "@/lib/utils";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import { Typography } from "@/components/typography/typography";
import { useGetCategoriesQuery } from "@/redux/features/productsApi";
import { ICategory } from "@/interfaces/product";
import CategoryCard from "@/components/cards/CategoryCard";

const CategoriesSliderSection = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const { data: categories, isLoading, error } = useGetCategoriesQuery({});

  const chunkSize = 2;
  const slidesData = useMemo(() => {
    if (!categories) return [];
    return chunkArray(categories as ICategory[], chunkSize);
  }, [categories]);
  
  const handlePrev = useCallback(() => {
    if (!swiperInstance) return;
    swiperInstance.slidePrev();
  }, [swiperInstance]);

  const handleNext = useCallback(() => {
    if (!swiperInstance) return;
    swiperInstance.slideNext();
  }, [swiperInstance]);

  const onSwiperSlideChange = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <section className="bg-[#1f1f1f] px-4 lg:px-0 lg:pl-[60px] py-[24px] lg:py-0 lg:pt-[90px]">
      {/* section header start *********************************/}
      <div className="flex items-center justify-between mb-8 lg:mb-10 lg:pr-[60px]">
        <Typography variant="h2-display" className="lg:uppercase text-white">
          Categories
        </Typography>

        <div className="flex items-center gap-3">
          <button
            className={cn(
              "flex items-center justify-center rounded-lg h-9 w-9 lg:h-10 lg:w-10 bg-[#EAEAEA] hover:bg-white text-black transition-opacity cursor-pointer",
              isBeginning && "opacity-50 cursor-not-allowed",
            )}
            onClick={handlePrev}
            disabled={isBeginning}
          >
            <ChevronLeft size={20} strokeWidth={2.5} />
          </button>
          <button
            className={cn(
              "flex items-center justify-center rounded-lg h-9 w-9 lg:h-10 lg:w-10 bg-[#EAEAEA] hover:bg-white text-black transition-opacity cursor-pointer",
              isEnd && "opacity-50 cursor-not-allowed",
            )}
            onClick={handleNext}
            disabled={isEnd}
          >
            <ChevronRight size={20} strokeWidth={2.5} />
          </button>
        </div>
      </div>
      {/* section header end *********************************/}

      {/* ================= Loading Skeleton ================= */}
      {isLoading && (
        <div className="grid gap-0 w-full overflow-hidden bg-[#FAFAFA] grid-cols-1 lg:grid-cols-2 rounded-tl-[3rem] lg:rounded-tl-[4rem] animate-pulse">
          {[1, 2].map((item) => (
            <div
              key={item}
              className="relative w-full h-[400px] lg:h-[600px] bg-gray-200"
            >
              <div className="absolute bottom-10 left-10 h-8 w-40 bg-gray-300 rounded" />
            </div>
          ))}
        </div>
      )}

      {/* ================= Error State ================= */}
      {error && !isLoading && (
        <div className="bg-white text-center py-20 rounded-tl-[3rem]">
          <p className="text-red-500 font-semibold">
            Failed to load categories.
          </p>
        </div>
      )}

      {/* ================= Empty State ================= */}
      {!isLoading && !error && slidesData.length === 0 && (
        <div className="bg-white text-center py-20 rounded-tl-[3rem]">
          <p className="text-gray-500 font-semibold">
            No categories available.
          </p>
        </div>
      )}

      {/* ================= Swiper ================= */}
      {!isLoading && !error && slidesData.length > 0 && (
        <div className="relative w-full">
          <Swiper
            modules={[EffectFade, Navigation]}
            effect={"fade"}
            fadeEffect={{ crossFade: true }}
            slidesPerView={1}
            spaceBetween={0}
            speed={600}
            onSwiper={setSwiperInstance}
            onSlideChange={onSwiperSlideChange}
            className="w-full !overflow-visible"
          >
            {slidesData.map((chunk, index) => (
              <SwiperSlide key={`slide-${index}`}>
                <div
                  className={
                    "grid gap-0 w-full overflow-hidden bg-[#FAFAFA] grid-cols-1 rounded-tl-[3rem] lg:grid-cols-2 lg:rounded-tl-[4rem]"
                  }
                >
                  {chunk.map((category, idx) => (
                    <CategoryCard
                      key={category.id}
                      category={category}
                      index={idx}
                    />
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </section>
  );
};

export default CategoriesSliderSection;
