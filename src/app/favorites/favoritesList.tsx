"use client";
import ImgGrid from "@/components/ImgGrid";
import { CloudinaryImage } from "../../components/CloudinaryImage";
import { useEffect, useState } from "react";
import { SearchResults } from "@/types/types";

export default function FavoritesList({
  initialResources,
}: {
  initialResources: SearchResults[];
}) {
  const [resources, setResources] = useState(initialResources);
  useEffect(() => {
    setResources(initialResources);
  }, [initialResources]);

  return (
    <ImgGrid
      images={resources}
      getImg={(imgData: SearchResults) => {
        return (
          <CloudinaryImage
            key={imgData.public_id}
            imgdata={imgData}
            width="400"
            height="300"
            alt="an img of something"
            onUnheart={(unheartedResource) => {
              setResources((currentResources) =>
                currentResources.filter(
                  (resource) =>
                    resource.public_id !== unheartedResource.public_id
                )
              );
            }}
          />
        );
      }}
    />
  );
}
