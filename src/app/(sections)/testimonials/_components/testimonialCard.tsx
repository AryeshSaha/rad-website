import Image from "next/image";
import React from "react";

const TestimonialCard = ({
  avatar,
  author,
  role,
  rating,
  quote,
}: {
  avatar?: string;
  author: string;
  role: string;
  rating: number;
  quote: string;
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
      <div className="md:w-1/3 w-full">
        <div className="relative max-w-[160px] mx-auto">
          <div
            className="absolute -inset-1 bg-gradient-to-r from-red-500 to-amber-500 rounded-full blur-sm"
            aria-hidden="true"
          ></div>
          <div className="relative h-20 w-20 sm:h-24 sm:w-24 mx-auto">
            <Image
              src={avatar || "/placeholder.svg"}
              alt={`Portrait of ${author}`}
              fill
              className="object-cover rounded-full"
            />
          </div>
        </div>

        <div className="text-center mt-4">
          <h4 className="font-bold">{author}</h4>
          <p className="text-white/70 text-sm">{role}</p>
          <div
            className="flex justify-center mt-2"
            aria-label={`Rated ${rating} out of 5 stars`}
          >
            {[...Array(rating)].map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
        </div>
      </div>

      <div className="md:w-2/3 w-full">
        <p className="text-base sm:text-lg md:text-xl italic mb-4 sm:mb-6 text-center md:text-left">
          &quot;{quote}&quot;
        </p>
        <div
          className="h-px w-16 bg-gradient-to-r from-red-500 to-amber-500 mx-auto md:mx-0"
          aria-hidden="true"
        ></div>
      </div>
    </div>
  );
};

export default TestimonialCard;
