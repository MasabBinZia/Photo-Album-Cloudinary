import React from "react";
import { Button } from "../ui/button";
import { Heart } from "../icons/Heart";
import { Folder } from "../icons/Folder";
import { Img } from "../icons/Img";
import Link from "next/link";

const SideBar = () => {
  return (
    <section className="">
      <div className="pb-12 w-[200px]">
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              Manage
            </h2>
            <div className="space-y-1">
              <Button
                asChild
                variant="ghost"
                className="w-full justify-start flex gap-2"
              >
                <Link href="/gallery">
                  <Img />
                  Gallery
                </Link>
              </Button>
              {/* <Button
                variant="ghost"
                className="w-full justify-start flex gap-2"
              >
                <Folder />
                Album
              </Button> */}
              <Button
                asChild
                variant="ghost"
                className="w-full justify-start flex gap-2"
              >
                <Link href="/favorites">
                  <Heart />
                  Favorites
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
