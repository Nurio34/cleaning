import Image from "next/image";

function Logo() {
  return (
    <figure className="relative w-16 aspect-square  overflow-hidden">
      <Image src={"/logo/1.jpg"} alt="logo" fill className="object-cover" />
    </figure>
  );
}
export default Logo;
