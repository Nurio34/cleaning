import Image from "next/image";
import { ImageType } from "..";
import { Dispatch, SetStateAction, useEffect } from "react";

function ImageContainer({
  image,
  currentImage,
  setCurrentImage,
}: {
  image: ImageType;
  currentImage: string;
  setCurrentImage: Dispatch<SetStateAction<string>>;
}) {
  useEffect(() => {}, []);

  return (
    <>
      <figure className="relative w-full h-full">
        <Image
          src={"/banner/2.jpg"}
          alt="banner1"
          fill
          className="object-cover"
        />
      </figure>
    </>
  );
}
export default ImageContainer;
