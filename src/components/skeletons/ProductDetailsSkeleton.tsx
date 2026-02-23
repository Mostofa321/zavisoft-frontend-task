const ProductDetailsSkeleton = () => {
  return (
    <section className="section-container overflow-hidden pt-2 pb-6 lg:pb-[128px]">
      <div className="flex flex-col lg:flex-row gap-4 animate-pulse">
        
        {/* Gallery Skeleton */}
        <div className="w-full lg:w-[calc(100%-446px)] space-y-4">
          {/* Main Image */}
          <div className="w-full h-[400px] bg-muted rounded-xl" />

          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="w-full h-[90px] bg-muted rounded-lg"
              />
            ))}
          </div>
        </div>

        {/* Product Info Skeleton */}
        <div className="w-full lg:w-[430px] space-y-4">
          <div className="h-8 w-3/4 bg-muted rounded" />
          <div className="h-6 w-1/2 bg-muted rounded" />
          <div className="h-6 w-1/3 bg-muted rounded" />

          <div className="space-y-2 pt-4">
            <div className="h-4 w-full bg-muted rounded" />
            <div className="h-4 w-5/6 bg-muted rounded" />
            <div className="h-4 w-4/6 bg-muted rounded" />
          </div>

          <div className="h-12 w-full bg-muted rounded-lg mt-6" />
        </div>

      </div>
    </section>
  );
};

export default ProductDetailsSkeleton;