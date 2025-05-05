import Image from "next/image";
import Link from "next/link";

function WhatsupComponent() {
  return (
    <div className="lg:w-4/6 flex flex-col lg:flex-row items-center gap-x-20 px-2 lg:px-0">
      <div className="order-2 lg:order-1">
        <header>
          <h2 className="text-2xl font-bold py-2">
            WhatsApp ile Hızlı Temizlik Hizmeti İletişimi
          </h2>
        </header>

        <p className="indent-4 py-1">
          İletişim formunu doldurmanın yanı sıra,{" "}
          <strong>WhatsApp üzerinden</strong> de bizimle kolayca iletişime
          geçebilirsiniz.
          <strong>Hızlı yanıt almak</strong> ve{" "}
          <strong>temizlik hizmetlerimiz hakkında anında bilgi edinmek</strong>{" "}
          için WhatsApp&apos;ı tercih edebilirsiniz.
        </p>

        <p className="indent-4 py-1">
          Sorularınız, fiyat teklifi talepleriniz veya detaylı bilgi
          ihtiyaçlarınız için hemen{" "}
          <strong>WhatsApp&apos;tan mesaj atın</strong> — ekibimiz size en kısa
          sürede geri dönüş yapacaktır.
        </p>
      </div>
      <Link
        href="https://wa.me/905078728758?text=Merhaba, temizlik hizmetiniz hakkında bilgi almak istiyorum. Yardımcı olabilir misiniz?"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-x-4 order-1 lg:order-2"
      >
        <p
          className="min-w-max font-bold text-3xl text-white"
          style={{ WebkitTextStroke: "2px black" }}
        >
          +90 507 872 8758
        </p>

        <figure className="relative w-28 aspect-square ">
          <Image
            src={"/logo/whatsup.webp"}
            alt="apartman temizliği iletişim whatsup logo"
            fill
            sizes="360px"
          />
        </figure>
      </Link>
    </div>
  );
}
export default WhatsupComponent;
