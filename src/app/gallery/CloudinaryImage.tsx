"use client";
import { Heart } from "@/components/icons/Heart";
import { CldImage, CldImageProps } from "next-cloudinary";
import { useState, useTransition } from "react";
import { SearchResults } from "./page";
import { setAsFavoriteAction } from "./actions";
import { FullHeart } from "@/components/icons/FullHeart";

export function CloudinaryImage(
  props: {
    imgdata: SearchResults;
    onUnheart?: (unheartedResource: SearchResults) => void;
    [key: string]: any;
  } & Omit<CldImageProps, "src">
) {
  const [transition, startTransition] = useTransition();
  const { imgdata, onUnheart } = props;
  const [isFavorited, setIsFavorited] = useState(
    imgdata.tags.includes("favorite")
  );
  return (
    <div className="relative">
      <CldImage {...props} src={imgdata.public_id} />
      {isFavorited ? (
        <FullHeart
          onClick={() => {
            onUnheart?.(imgdata);
            setIsFavorited(false);
            startTransition(() => {
              setAsFavoriteAction(imgdata.public_id, false);
            });
          }}
          className="absolute top-2 left-2 text-red-600 hover:text-white cursor-pointer"
        />
      ) : (
        <Heart
          onClick={() => {
            setIsFavorited(true);
            startTransition(() => {
              setAsFavoriteAction(imgdata.public_id, true);
            });
          }}
          className="absolute top-2 left-2 hover:text-red-600 cursor-pointer"
        />
      )}
    </div>
  );
}
