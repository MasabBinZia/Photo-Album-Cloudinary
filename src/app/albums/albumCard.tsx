import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Folder } from "@/types/types";

export function AlbumCard({ folder }: { folder: Folder }) {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>{folder.name}</CardTitle>
        <CardDescription>All Your {folder.name} images</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex justify-between">
        <Button asChild>
          <Link href={`/albums/${folder.name}`}>View Album</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
