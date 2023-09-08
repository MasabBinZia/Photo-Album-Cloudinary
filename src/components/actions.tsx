"use server";
import { SearchResults } from "@/app/gallery/page";
import cloudinary from "cloudinary";

export async function setAsFavoriteAction(
  publicId: string,
  isFavorite: boolean
) {
  if (isFavorite) {
    await cloudinary.v2.uploader.add_tag("favorite", [publicId]);
  } else {
    await cloudinary.v2.uploader.remove_tag("favorite", [publicId]);
  }
}

export async function addImgToAlbum(img: SearchResults, album: string) {
  await cloudinary.v2.api.create_folder(album);

  let parts = img.public_id.split("/");
  if (parts.length > 1) {
    parts = parts.slice(1);
  }
  const publicId = parts.join("/");
  await cloudinary.v2.uploader.rename(img.public_id, `${album}/${publicId}`);
}
