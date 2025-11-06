import Container from "@/components/ui/container";
import React from "react";

const ContentFullWidth = (props: { heading: string; body: string[] }) => {
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-col items-center text-center gap-8 mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            {props.heading}
          </h2>

          {Array.isArray(props.body) ? (
            props.body.map((p, i) => (
              <p
                key={i}
                className="text-base sm:text-lg text-white/70 max-w-6xl"
              >
                {p}
              </p>
            ))
          ) : (
            <p
              className="text-base sm:text-lg text-white/70 max-w-6xl"
              style={{ whiteSpace: "pre-line" }}
            >
              {props.body}
            </p>
          )}
        </div>
      </Container>
    </div>
  );
};

export default ContentFullWidth;
