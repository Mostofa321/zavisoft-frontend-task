import { IReview } from "@/interfaces/product";
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"
import { Star } from "lucide-react"
import { Typography } from "../typography/typography";

const ReviewCard = ({review} : {review: IReview}) => {
    return (
        <Card key={review.id} className="rounded-[2rem] p-0 gap-0 overflow-hidden shadow-none border-none h-[339px] lg:h-[500px] flex flex-col">
            <CardHeader className="flex flex-row items-start justify-between p-4 lg:p-8">
              <div className="flex flex-col space-y-1">
                <Typography variant="h6" className="text-[20px]">{review.title}</Typography>
                <Typography variant="body" className="text-dark-gray">{review.text}</Typography>
                <div className="flex items-center mt-2">
                  {/* ratting stars, filled if the rating is 5.0 */}
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 mr-0.5 fill-current ${i < review.rating ? "text-orange-400" : "text-gray-300"}`}
                    />
                  ))}
                  <span className="text-gray-800 font-medium text-sm ml-1.5">{review.rating.toFixed(1)}</span>
                </div>
              </div>
              {/* Reviewer Avatar */}
              <Avatar className="h-12 w-12">
                <AvatarImage src={review.reviewer.imageUrl} alt={review.reviewer.name} />
                <AvatarFallback>{review.reviewer.name.charAt(0)}</AvatarFallback>
              </Avatar>
            </CardHeader>

            {/* Card Content: The main product image */}
            <CardContent className="p-0 flex-1">
              <div className="relative h-82 w-full">
                <Image
                  src={review.productImageUrl}
                  alt="Product being reviewed"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-b-[2rem]"
                />
              </div>
            </CardContent>
          </Card>
    );
};

export default ReviewCard;