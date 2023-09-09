import { SearchResults } from "@/types/types";
import { CloudinaryImage } from "../../components/CloudinaryImage";
import ImgGrid from "@/components/ImgGrid";

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
