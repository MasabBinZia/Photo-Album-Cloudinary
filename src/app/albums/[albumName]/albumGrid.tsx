import ImgGrid from "@/components/ImgGrid";
import { CloudinaryImage } from "@/components/CloudinaryImage";
import { SearchResults } from "@/types/types";

export default function AlbumGrid({ images }: { images: SearchResults[] }) {
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
