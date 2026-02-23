"use client";

import ProductDetailsSection from "@/components/pages/product/ProductDetailsSection";
import { useParams } from "next/navigation";
const ProductPage = () => {
  const params = useParams();

  return (
    <>
      <ProductDetailsSection productId={Number(params.id)} />
    </>
  );
};

export default ProductPage;
