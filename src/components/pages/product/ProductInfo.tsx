"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { Typography } from "@/components/typography/typography";
import { IProduct } from "@/interfaces/product";

type ColorOption = {
  name: string;
  value: string;
};

const sizes: number[] = [38, 39, 40, 41, 42, 43, 44, 45, 46, 47];

const colors: ColorOption[] = [
  { name: "Shadow Navy", value: "#2E3A46" },
  { name: "Army Green", value: "#6E7F6A" },
];

const ProductInfo = ({product}: {product: IProduct}) => {
  const [selectedSize, setSelectedSize] = useState<number>(38);
  const [selectedColor, setSelectedColor] = useState<string>(colors[0].value);

  return (
    <div className="w-full space-y-4">
      <span className="inline-block bg-blue font-rubik text-white text-[12px] font-medium px-4 py-2 lg:py-3 rounded-[8px] lg:rounded-[12px]">
        New Release
      </span>

      <Typography variant="h5">{product?.title}</Typography>
      <Typography variant="h6" className="text-blue">
        ${product?.price}
      </Typography>

      {/* Color */}
      <div className="mb-6">
        <Typography
          variant="rubik-base"
          className="mb-3 inline-block lg:uppercase"
        >
          Color
        </Typography>

        <div className="flex gap-3">
          {colors.map((color: ColorOption) => {
            const isActive: boolean = selectedColor === color.value;

            return (
              <button
                key={color.value}
                type="button"
                onClick={() => setSelectedColor(color.value)}
                aria-label={color.name}
                className={`relative w-8 h-8 rounded-full transition
                ${
                  isActive
                    ? "ring-2 ring-black ring-offset-2"
                    : "ring-1 ring-gray-300"
                }`}
                style={{ backgroundColor: color.value }}
              />
            );
          })}
        </div>
      </div>

      {/* Size */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <Typography variant="rubik-base" className=" lg:uppercase">
            Size
          </Typography>
          <Typography
            variant="rubik-label"
            className=" lg:uppercase cursor-pointer"
          >
            Size Chart
          </Typography>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {sizes.map((size: number) => (
            <Button
              size={"icon"}
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`
                ${
                  selectedSize === size
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
            >
              {size}
            </Button>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <Button className="flex-1 h-12 bg-black hover:bg-neutral-800">
          ADD TO CART
        </Button>
        <Button
          size="icon"
          variant="secondary"
          className=" bg-black text-white"
        >
          <Heart size={18} />
        </Button>
      </div>

      <Button className="w-full">
        BUY IT NOW
      </Button>

      {/* About */}
      <div className="space-y-3 pt-4">
        <Typography variant="rubik-base" className=" lg:uppercase">
          About the product
        </Typography>
        <Typography variant="body" className="text-dark-gray mt-4">
            {product?.description}
        </Typography>
      </div>
    </div>
  );
};

export default ProductInfo;
