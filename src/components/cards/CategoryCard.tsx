import { ICategory } from "@/interfaces/product";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Typography } from "../typography/typography";

const CategoryCard = ({
  category,
  index,
}: {
  category: ICategory;
  index: number;
}) => {
  const isFirst = index === 0;
  const titleWords = category.name.split(" ");

  return (
    <div
      className={cn(
        "relative group w-full h-[400px] lg:h-[600px] transition-all duration-300",
        isFirst ? "bg-[#F0F2F5]" : "bg-[#FAFAFA]",
      )}
    >
      <div className="absolute inset-0 flex items-center justify-center pb-16 px-6">
        <Image
          src={category.image}
          alt={category.name}
          width={600}
          height={400}
          className="object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105 w-auto max-h-[220px] lg:max-h-[320px]"
        />
      </div>

      <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10 flex flex-col">
        {titleWords.map((word) => (
          <Typography
            key={word}
            variant="h4-display"
            className="lg:uppercase tracking-wide"
          >
            {word}
          </Typography>
        ))}
      </div>

      <div className="absolute bottom-6 right-6 lg:bottom-10 lg:right-10 z-20">
        <div className="bg-[#222222] text-white p-2.5 rounded-lg flex items-center justify-center transition-colors duration-300 group-hover:bg-black cursor-pointer">
          <ArrowUpRight size={22} strokeWidth={2.5} />
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
