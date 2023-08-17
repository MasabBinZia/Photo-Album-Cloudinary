"use client";

import { CldUploadButton } from "next-cloudinary";
import { CldImage } from "next-cloudinary";
import { CldUploadWidget } from "next-cloudinary";

export type UploadResult = {
  info: {
    public_id: string;
  };
  event: "success";
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton
        onUpload={(result: UploadResult) => console.log(result.info.public_id)}
        uploadPreset="enpss8rt"
      />
{/* 15:50 */}
      <CldImage
        width="960"
        height="600"
        src="bvrydvw3jdfwvzqgg329"
        sizes="100vw"
        alt="Description of my image"
      />
    </main>
  );
}
