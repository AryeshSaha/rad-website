import ResponsiveImage from "@/components/responsiveImage";
import Container from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { ImageTextSectionProps } from "@/types/propTypes";
import React from "react";

const ContentImageSplit = ({
  image,
  alt,
  heading,
  body,
  imagePosition = "left",
  aspectRatio = "100%",
  className,
  imageContainerClassName,
  textContainerClassName,
}: ImageTextSectionProps) => {
  return (
    <Container>
      <div
        className={cn(
          "w-full flex flex-col md:flex-row items-stretch gap-4 py-10",
          className
        )}
      >
        <div
          className={cn(
            `w-full md:w-1/2 ${imagePosition === "right" ? "md:order-2" : ""}`,
            imageContainerClassName
          )}
        >
          <ResponsiveImage
            src={image}
            alt={alt}
            aspectRatio={aspectRatio}
            overlayClassName="bg-black/30"
          />
        </div>
        <div
          className={cn(
            "w-full md:w-1/2 flex items-center justify-between px-4 md:px-10",
            textContainerClassName
          )}
        >
          <div className={`max-w-md`}>
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-beauvoir-blue">
              {heading}
            </div>

            {Array.isArray(body) ? (
              body.map((p, i) => (
                <p
                  key={i}
                  className="text-sm md:text-base text-gray-400 leading-relaxed mb-5"
                >
                  {p}
                </p>
              ))
            ) : (
              <p
                className="text-sm md:text-base text-gray-400 leading-relaxed"
                style={{ whiteSpace: "pre-line" }}
              >
                {body}
              </p>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContentImageSplit;
