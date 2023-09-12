"use client";

import { Button } from "@/components/ui/button";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

const AIgeneratedBtns = [
  { id: 1, Transformation: "generative-fill", name: "Apply Generative Fill" },
  { id: 2, Transformation: "pixelate", name: "Apply pixelate" },
  { id: 3, Transformation: "blur", name: "Apply blur" },
  { id: 4, Transformation: "grayscale", name: "Apply grayscale" },
  { id: 5, Transformation: "tint", name: "Apply tint" },
  { id: 6, Transformation: "opacity", name: "Apply opacity" },
  { id: 7, Transformation: "shear", name: "Apply shear" },
  { id: 8, Transformation: "border", name: "Apply border" },
  { id: 9, Transformation: "trim", name: "Apply trim" },
  { id: 10, Transformation: "undefined", name: "Clear All" },
];

export default function EditPage({
  searchParams: { publicId },
}: {
  searchParams: {
    publicId: string;
  };
}) {
  const [transformation, setTransformation] = useState<
    | undefined
    | "generative-fill"
    | "blur"
    | "pixelate"
    | "grayscale"
    | "tint"
    | "opacity"
    | "shear"
    | "border"
    | "trim"
  >();
  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Edit {publicId}</h1>
        </div>
        <div className="flex gap-4">
          {AIgeneratedBtns.map((btn) => (
            <Button
              key={btn.id}
              onClick={() => setTransformation(btn.Transformation as any)}
              variant="default"
            >
              {btn.name}
            </Button>
          ))}
        </div>
        <div className="flex lg:flex-row flex-col gap-12 items-center justify-center">
          <CldImage src={publicId} width={300} height={300} alt={publicId} />

          {transformation === "generative-fill" && (
            <CldImage
              src={publicId}
              width={300}
              height={300}
              alt={publicId}
              fillBackground
              crop="pad"
            />
          )}
          {}
          {transformation === "blur" && (
            <CldImage
              src={publicId}
              width={300}
              height={300}
              alt={publicId}
              effects={[
                {
                  blur: "1200",
                },
              ]}
            />
          )}
          {transformation === "pixelate" && (
            <CldImage
              src={publicId}
              width={300}
              height={300}
              alt={publicId}
              effects={[
                {
                  pixelate: true,
                },
              ]}
            />
          )}
          {transformation === "grayscale" && (
            <CldImage
              src={publicId}
              width={300}
              height={300}
              alt={publicId}
              effects={[
                {
                  grayscale: true,
                },
              ]}
            />
          )}
          {transformation === "tint" && (
            <CldImage
              src={publicId}
              width={300}
              height={300}
              alt={publicId}
              effects={[
                {
                  tint: "equalize:80:blue:blueviolet",
                },
              ]}
            />
          )}
          {transformation === "opacity" && (
            <CldImage
              src={publicId}
              width={300}
              height={300}
              alt={publicId}
              effects={[
                {
                  opacity: "50",
                },
              ]}
            />
          )}
          {transformation === "shear" && (
            <CldImage
              src={publicId}
              width={300}
              height={300}
              alt={publicId}
              effects={[
                {
                  shear: "40:0",
                },
              ]}
            />
          )}
          {transformation === "border" && (
            <CldImage
              src={publicId}
              width={300}
              height={300}
              alt={publicId}
              effects={[
                {
                  border: "40px_solid_purple",
                },
              ]}
            />
          )}
        </div>
      </div>
    </section>
  );
}
