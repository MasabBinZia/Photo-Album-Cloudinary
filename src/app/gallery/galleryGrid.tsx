import { CloudinaryImage } from "./CloudinaryImage";
import ImgGrid from "@/components/ImgGrid";
import { SearchResults } from "./page";

export default function GalleryGrid({ images }: { images: SearchResults[] }) {
  return (
    <ImgGrid
      images={images}
      getImg={(imgData: SearchResults) => {
        return (
          <CloudinaryImage
            key={imgData.public_id}
            imgdata={imgData}
            width="400"
            height="300"
            alt="an img of something"
          />
        );
      }}
    />
  );
}
