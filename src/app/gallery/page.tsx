import UploadButton from "./uploadButton";
import cloudinary from "cloudinary";
import { CloudinaryImage } from "./CloudinaryImage";
import ImgGrid from "@/components/ImgGrid";
import GalleryGrid from "./galleryGrid";

export type SearchResults = {
  public_id: string;
  tags: string[];
};

export default async function Gallerypage() {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResults[] };

  const MAX_COLUMNS = 4;

  function getColums(colIndex: number) {
    return results.resources.filter(
      (resource, idx) => idx % MAX_COLUMNS == colIndex
    );
  }

  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Gallery</h1>
          <UploadButton />
        </div>
        <GalleryGrid images={results.resources} />
      </div>
    </section>
  );
}
