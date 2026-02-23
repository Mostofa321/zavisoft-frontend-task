import ProductDetailsSkeleton from "@/components/skeletons/ProductDetailsSkeleton";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import { useGetProductByIdQuery } from "@/redux/features/productsApi";

const normalizeImages = (images?: string[]): string[] => {
  if (!images || images.length === 0) {
    return ["/hero.png", "/hero.png", "/hero.png", "/hero.png"];
  }

  if (images.length >= 4) {
    return images.slice(0, 4);
  }

  if (images.length === 3) {
    return [...images, images[0]];
  }

  if (images.length === 2) {
    return [...images, ...images];
  }

  if (images.length === 1) {
    return Array(4).fill(images[0]);
  }

  return images;
};

const ProductDetailsSection = ({ productId }: { productId: number }) => {
  const {
    data: product,
    isLoading,
    isError,
  } = useGetProductByIdQuery(productId);

  const images: string[] = normalizeImages(product?.images);

    //  Loading State
  if (isLoading) {
    return (
      <ProductDetailsSkeleton />
    );
  }

  //  Error State
  if (isError) {
    return (
      <div className="section-container py-20 text-center">
        <p className="text-lg font-semibold text-red-500">
          Something went wrong.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Please try again later.
        </p>
      </div>
    );
  }

  //  Empty State
  if (!product) {
    return (
      <div className="section-container py-20 text-center">
        <p className="text-lg font-semibold">
          Product not found.
        </p>
      </div>
    );
  }

  return (
    <section className="section-container overflow-hidden pt-2 pb-6 lg:pb-[128px]">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-[calc(100%-446px)]">
          <ProductGallery images={images} />
        </div>
        <div className="w-full lg:w-[430px]">
          <ProductInfo product={product} />
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsSection;
