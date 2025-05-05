import Image from "next/image";
import Link from "next/link";

function Services() {
  return (
    <section
      id="hizmetlerimiz"
      className="lg:h-screen flex flex-col gap-y-[2vh] lg:grid grid-cols-12 grid-rows-12 isolate"
    >
      <div
        className="hidden lg:block col-start-2 col-end-12 row-start-3 row-end-11 scale-110
        relative -z-10 
      "
      >
        <div className=" w-full h-full rounded bg-secondary/20 blur-sm shadow-[0px_20px_30px_-20px_black]"></div>
        <div className="absolute z-20 -top-12 -right-12 text-9xl">🧹</div>
      </div>
      <h2
        className="col-start-1 col-span-full row-start-1 row-end-3 self-center justify-self-center text-xl lg:text-5xl font-extrabold pt-[2vh] lg:py-0"
        style={{ fontVariant: "small-caps" }}
      >
        Hizmetlerimiz
      </h2>
      <figure
        className="relative col-start-2 col-end-7 row-start-3 row-end-11
            shadow-[0px_20px_50px_-10px_black]
            w-full aspect-square lg:aspect-auto          
        "
      >
        <Image
          src={"/sections/services.webp"}
          alt="apartman temizliği hizmetleri"
          fill
          className="object-cover"
          sizes="(min-width=1023px) 100vw,50vw"
        />
      </figure>
      <div
        className="col-start-8 col-end-12 row-start-3 row-end-11
            self-center
            lg:text-lg font-semibold lg:leading-9 px-[1vw] lg:px-0
            order-2
            grid gap-y-[2vh]
        "
      >
        <h2
          className="text-xl font-extrabold flex items-center"
          style={{ fontVariant: "small-caps" }}
        >
          <span className="text-5xl">🏢</span>Apartman Temizliği Hizmeti
        </h2>

        <p className="indent-9">
          Yaşadığınız apartmanın her zaman temiz, hijyenik ve düzenli kalmasını
          sağlamak için
          <strong> profesyonel apartman temizliği hizmeti</strong> sunuyoruz.
          Ortak kullanım alanları, merdivenler, asansörler ve bina girişleri
          <strong> hijyen kurallarına uygun şekilde</strong> özenle temizlenir.
        </p>

        <ul className="px-[1vw]">
          <li>✅ Merdiven ve koridorların düzenli temizliği</li>
          <li>✅ Asansör ve bina girişi hijyen bakımı</li>
          <li>✅ Çöp alanlarının temizlenmesi ve düzenlenmesi</li>
          <li>✅ Kapı, cam ve trabzan yüzeylerinin detaylı temizliği</li>
        </ul>

        <p>
          <strong>Apartmanınızda sağlıklı yaşam alanları</strong> oluşturmak ve{" "}
          <strong>düzenli temizlik hizmeti</strong> almak için hemen bizimle
          iletişime geçin.
        </p>

        <Link
          href={"#iletişim"}
          className="justify-self-end btn btn-secondary transition-transform hover:scale-125"
        >
          İletişime Geçin
        </Link>
      </div>
    </section>
  );
}
export default Services;
