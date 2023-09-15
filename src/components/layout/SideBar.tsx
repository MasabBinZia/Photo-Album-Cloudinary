import React from "react";
import { Button } from "../ui/button";
import { FolderIcon, Heart } from "lucide-react";
import { Image } from "lucide-react";
import Link from "next/link";
import cloudinary from "cloudinary";
import { Folder } from "@/types/types";


type Btn = {
  id: number;
  name: string;
  icon: React.JSX.Element;
  href: string;
};

const BtnData: Btn[] = [
  { id: 1, name: "Gallery", icon: <Image />, href: "/gallery" },
  { id: 2, name: "Favorites", icon: <Heart />, href: "/favorites" },
  { id: 3, name: "Albums", icon: <FolderIcon />, href: "/albums" },

];

async function SideBar() {
  const { folders } = (await cloudinary.v2.api.root_folders()) as {
    folders: Folder[];
  };
  return (
    <section>
      <div className="pb-12 w-[200px]">
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              Manage
            </h2>
            <div className="space-y-1">
              {BtnData.map((data) => (
                <Button
                  key={data.id}
                  asChild
                  variant="ghost"
                  className="w-full justify-start flex gap-2"
                >
                  <Link href={data.href}>
                    {data.icon}
                    {data.name}
                  </Link>
                </Button>
              ))}
            </div>
            {folders.map((folder) => (
              <Button
                variant="ghost"
                asChild
                key={folder.name}
                className="w-full justify-start flex gap-2"
              >
                <Link className="pl-8" href={`/albums/${folder.path}`}>
                  {folder.name}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SideBar;
