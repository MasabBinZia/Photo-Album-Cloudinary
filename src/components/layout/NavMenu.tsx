"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Heart } from "lucide-react";
import { Image } from "lucide-react";
import { Folder } from "lucide-react";

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

export function NavMenu() {
  return (
    <div className="flex justify-center py-8 px-4">
      <NavigationMenu>
        <NavigationMenuList>
          {BtnData.map((data) => (
            <NavigationMenuItem key={data.id}>
              <Link href={data.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {data.icon}
                  <span className="ml-1">{data.name}</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
