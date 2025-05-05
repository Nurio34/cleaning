import Image from "next/image";

function Logo() {
  return (
    <figure className="relative w-16 aspect-square  overflow-hidden">
      <Image
        src={"/logo/logo.webp"}
        alt="apartman temizliği logosu"
        fill
        className="object-cover"
        sizes="64px"
      />
    </figure>
  );
}
export default Logo;
