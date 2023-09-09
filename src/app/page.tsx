"use client";

import { CldUploadButton } from "next-cloudinary";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

export default function Home() {
  const [imgId, setImgId] = useState("");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton
        onUpload={(result: any) => {
          setImgId(result.info.public_id);
        }}
        uploadPreset="enpss8rt"
      />
      {imgId && (
        <CldImage
          width="400"
          height="300"
          src={imgId}
          sizes="100vw"
          alt="Description of my image"
        />
      )}
    </main>
  );
}
