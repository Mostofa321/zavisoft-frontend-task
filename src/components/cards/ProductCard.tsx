import Image from "next/image";
import { Button } from "../ui/button";
import { IProduct } from "@/interfaces/product";
import { Typography } from "../typography/typography";
import Link from "next/link";

const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <div key={product.id} className="flex flex-col gap-4">
      {/* Card Image Container */}
      <div className="relative aspect-square overflow-hidden rounded-[18px] lg:rounded-[30px] border-[8px] border-white bg-[#ECEEF0]">
        {/* Custom "New" Badge */}
        <div className="absolute flex items-center justify-center w-[42px] h-[22px] lg:w-[58px] lg:h-[38px] left-0 top-0 z-10 rounded-tl-[12px] rounded-br-[12px] lg:rounded-tl-[24px] lg:rounded-br-[24px] bg-blue px-2 py-[2px] lg:px-4 lg:py-2.5 text-sm font-semibold text-white">
          <Typography variant="rubik-xs">New</Typography>
        </div>

        {/* Product Image */}
        <div className="flex h-full w-full items-center justify-center p-4">
          <Image
            src={product.images[0] || "/placeholder.png"}
            width={302}
            height={334}
            alt={product.title}
            className="h-auto w-full object-contain mix-blend-multiply"
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-4">
        <Typography variant="h6">{product.title}</Typography>

        <Link
          href={`/products/${product.id}`}
        >
          <Button variant="secondary" className="w-full uppercase">
            View Product -<span className="text-yellow">${product.price}</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
