import { SearchResults } from "@/types/types";
import { ReactNode } from "react";

const MAX_COLUMNS = 4;

const ImgGrid = ({
  images,
  getImg,
}: {
  images: SearchResults[];
  getImg: (imgData: SearchResults) => ReactNode;
}) => {
  function getColums(colIndex: number) {
    return images.filter((resource, idx) => idx % MAX_COLUMNS == colIndex);
  }

  return (
    <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-4 md:grid-cols-4 md:gap-4">
      {[getColums(0), getColums(1), getColums(2), getColums(3)].map(
        (column, idx) => (
          <div key={idx} className="flex flex-col gap-4">
            {column.map(getImg)}
          </div>
        )
      )}
    </div>
  );
};

export default ImgGrid;
