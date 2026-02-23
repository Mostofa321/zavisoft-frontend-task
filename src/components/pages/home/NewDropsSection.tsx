"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useGetProductsQuery } from "@/redux/features/productsApi";
import ProductCard from "@/components/cards/ProductCard";
import { IProduct } from "@/interfaces/product";
import ProductSkeletons from "@/components/skeletons/ProductSkeletons";
import { Typography } from "@/components/typography/typography";

const NewDropsSection: React.FC = () => {
  const { data: productsData, error, isLoading } = useGetProductsQuery({});

  // Get newest 4 products (sorted by id DESC)
  const newestProducts: IProduct[] =
    productsData
      ?.slice()
      ?.sort((a: IProduct, b: IProduct) => b.id - a.id)
      ?.slice(0, 4) || [];

  return (
    <section className="section-container mb-4 lg:mb-[128px]">
      {/* Header Section */}
      <div className="mb-6 lg:mb-8 flex items-start justify-between gap-6 md:items-end">
        <Typography variant="h2-display" className="max-w-[589px] lg:uppercase">Don&apos;t miss out <br /> new drops</Typography>
        <Button className="uppercase">Shop New Drops</Button>
      </div>

      {/* Loading State - Skeleton */}
      {isLoading && (
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 animate-pulse">
          {Array.from({ length: 4 }).map((_, idx) => (
            <ProductSkeletons key={idx} />
          ))}
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="text-center py-10 text-red-500 font-semibold">
          Failed to load products. Please try again.
        </div>
      )}

      {/* Empty State */}
      {!isLoading && !error && newestProducts.length === 0 && (
        <div className="text-center py-10 text-gray-500 font-semibold">
          No products available.
        </div>
      )}

      {/* Products Grid */}
      {!isLoading && !error && newestProducts.length > 0 && (
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {newestProducts.map((product: IProduct) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};

export default NewDropsSection;