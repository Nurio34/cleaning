import Image from "next/image";
import Link from "next/link";

function WhatsupComponent() {
  return (
    <div className="lg:w-4/6 flex items-center gap-x-20">
      <p
        className="font-semibold text-lg text-center"
        style={{ fontFamily: "cursive" }}
      >
        İletişim için formu doldurmanın yanı sıra, WhatsApp üzerinden de bize
        kolayca ulaşabilirsiniz. Hızlı bir şekilde yanıt alabilmek için
        WhatsApp&apos;ı tercih edebilirsiniz. Sorularınız veya talepleriniz için
        hemen mesaj atın!
      </p>
      <Link
        href="https://wa.me/905074862557?text=Merhaba, temizlik hizmetiniz hakkında bilgi almak istiyorum. Yardımcı olabilir misiniz?"
        target="_blank"
        // rel="noopener noreferrer"
        className="flex items-center gap-x-4"
      >
        <p
          className="min-w-max font-bold text-3xl text-white"
          style={{ WebkitTextStroke: "2px black" }}
        >
          +90 507 486 2557
        </p>

        <figure className="relative w-28 aspect-square ">
          <Image
            src={"/logo/whatsup.png"}
            alt="whatsup logo"
            fill
            sizes="360px"
          />
        </figure>
      </Link>
    </div>
  );
}
export default WhatsupComponent;
