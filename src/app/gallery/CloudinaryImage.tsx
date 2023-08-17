"use client";
import { Heart } from "@/components/icons/Heart";
import { CldImage } from "next-cloudinary";
import { useTransition } from "react";
import { SearchResults } from "./page";
import { setAsFavoriteAction } from "./actions";
import { FullHeart } from "@/components/icons/FullHeart";

export function CloudinaryImage(props: any & {imgdata:SearchResults}) {
  const [transition, startTransition] = useTransition();
  const {imgdata} =props;
  const isFavorited = imgdata.tags.includes("favorite");
  return (
    <div className="relative">
      <CldImage src={imgdata.public_id} {...props} />
      {isFavorited ? (
        <FullHeart
          onClick={() => {
            startTransition(() => {
              setAsFavoriteAction(imgdata.public_id, false);
            });
          }}
          className="absolute top-2 right-2 text-red-600 hover:text-white cursor-pointer"
        />
      ) : (
        <Heart
          onClick={() => {
            startTransition(() => {
              setAsFavoriteAction(imgdata.public_id, true);
            });
          }}
          className="absolute top-2 right-2 hover:text-red-600 cursor-pointer"
        />
      )}
    </div>
  );
}
