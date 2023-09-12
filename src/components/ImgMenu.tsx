"use client";
import { Menu, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AddToAlbumDialog } from "./AddToAlbumDialog";
import { useState } from "react";
import { SearchResults } from "@/types/types";
import Link from "next/link";

export function ImgMenu({ img }: { img: SearchResults }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute top-2 right-2 lg:right-8">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" className="w-8 h-8 p-0">
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem asChild>
            <AddToAlbumDialog onClose={() => setOpen(false)} img={img} />
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Button
              className="cursor-pointer flex justify-start pl-4"
              asChild
              variant="secondary"
            >
              <Link
                href={`/edit?publicId=${encodeURIComponent(img.public_id)}`}
              >
                <Pencil className="mr-2 w-4 h-4" />
                Edit
              </Link>
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
