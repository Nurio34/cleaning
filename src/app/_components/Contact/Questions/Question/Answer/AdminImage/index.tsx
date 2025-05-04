import Image from "next/image";

function AdminImage() {
  return (
    <figure className="relative min-w-8 aspect-square rounded-full overflow-hidden outline-2">
      <Image src={"/avatar/admin.webp"} fill alt="avatar" sizes="32px" />
    </figure>
  );
}
export default AdminImage;
