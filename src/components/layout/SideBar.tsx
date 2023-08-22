import React from "react";
import { Button } from "../ui/button";
import { Heart } from "lucide-react";
import { Image } from "lucide-react";
import { Folder } from "lucide-react";
import Link from "next/link";
import { NavMenu } from "./NavMenu";

type Btn = {
  id: number;
  name: string;
  icon: React.JSX.Element;
  href: string;
};

const BtnData: Btn[] = [
  { id: 1, name: "Gallery", icon: <Image />, href: "/gallery" },
  { id: 2, name: "Album", icon: <Folder />, href: "/" },
  { id: 3, name: "Favorites", icon: <Heart />, href: "/favorites" },
];

const SideBar = () => {
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
