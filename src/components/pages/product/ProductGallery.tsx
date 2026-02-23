// "use client";

// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// interface ProductGalleryProps {
//   images: string[];
// }

// const ProductGallery = ({ images }: ProductGalleryProps) => {
//   return (
//     <div className="w-full">
//       {/* ===== Desktop Grid (lg and up) ===== */}
//       <div className="hidden lg:grid grid-cols-2 gap-6">
//         {images.map((src: string, index: number) => (
//           <div
//             key={index}
//             className="relative w-full aspect-square bg-[#F2F2F2] rounded-2xl overflow-hidden"
//           >
//             <Image
//               src={src}
//               alt="Product image"
//               width={429}
//               height={510}
//               className="object-cover"
//               priority
//             />
//           </div>
//         ))}
//       </div>

//       {/* ===== Mobile Slider (< lg) ===== */}
//       <div className="lg:hidden">
//         <Swiper
//           modules={[Pagination]}
//           pagination={{ clickable: true }}
//           spaceBetween={20}
//           slidesPerView={1}
//         >
//           {images.map((src: string, index: number) => (
//             <SwiperSlide key={index}>
//               <div className="relative w-full bg-[#F2F2F2] rounded-2xl overflow-hidden">
//                 <Image
//                   src={src}
//                   alt="Product image"
//                   width={358}
//                   height={273}
//                   className="object-cover w-full h-full"
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Thumbnail Row */}
//         <div className="flex gap-3 mt-4 overflow-x-auto">
//           {images.map((src: string, index: number) => (
//             <div
//               key={`thumb-${index}`}
//               className="relative w-[64px] h-[64px] bg-[#F2F2F2] rounded-xl shrink-0 overflow-hidden"
//             >
//               <Image
//                 src={src}
//                 alt="Thumbnail"
//                 width={64}
//                 height={64}
//                 className="object-cover w-full h-full"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductGallery;


"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface ProductGalleryProps {
  images: string[];
}

const ProductGallery = ({ images }: ProductGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(
    null
  );

  return (
    <div className="w-full">
      {/* ===== Desktop Grid (lg and up) ===== */}
      <div className="hidden lg:grid grid-cols-2 gap-4 rounded-[48px] overflow-hidden">
        {images.map((src: string, index: number) => (
          <div
            key={index}
            className="relative w-full aspect-square bg-[#F2F2F2] overflow-hidden"
          >
            <Image
              src={src}
              alt="Product image"
              width={429}
              height={510}
              className="object-cover w-full h-full"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* ===== Mobile Slider (< lg) ===== */}
      <div className="lg:hidden">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          onSwiper={(swiper: SwiperType) => setSwiperInstance(swiper)}
          onSlideChange={(swiper: SwiperType) =>
            setActiveIndex(swiper.activeIndex)
          }
        >
          {images.map((src: string, index: number) => (
            <SwiperSlide key={index}>
              <div className="relative w-full bg-[#F2F2F2] rounded-2xl overflow-hidden">
                <Image
                  src={src}
                  alt="Product image"
                  width={358}
                  height={273}
                  className="object-cover w-full h-full"
                  priority={index === 0}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ===== Thumbnail Row ===== */}
        <div className="flex gap-3 mt-4 overflow-x-auto">
          {images.map((src: string, index: number) => (
            <button
              key={`thumb-${index}`}
              onClick={() => {
                swiperInstance?.slideTo(index);
                setActiveIndex(index);
              }}
              className={`relative w-[64px] h-[64px] rounded-xl shrink-0 overflow-hidden border-2 transition
                ${
                  activeIndex === index
                    ? "border-black"
                    : "border-transparent"
                }`}
            >
              <Image
                src={src}
                alt="Thumbnail"
                width={64}
                height={64}
                className="object-cover w-full h-full"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;