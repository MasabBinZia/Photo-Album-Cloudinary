"use client";
import { CldImage } from "next-cloudinary";
import React from "react";

export function CloudinaryImage(props: any) {
  return <CldImage {...props} />;
}
