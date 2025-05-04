import Image from "next/image";

function Logo() {
  return (
    <figure className="relative w-16 aspect-square  overflow-hidden">
      <Image
        src={"/logo/logo.png"}
        alt="logo"
        fill
        className="object-cover"
        sizes="64px"
      />
    </figure>
  );
}
export default Logo;
