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
        className="col-start-1 col-span-full row-start-1 row-end-3 self-center justify-self-center text-xl lg:text-7xl font-extrabold pt-[2vh] lg:py-0"
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
          src={"/banner/3.jpg"}
          alt="banner2"
          fill
          className="object-cover"
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
          <span className="text-5xl">🏢</span>Apartman Temizliği
        </h2>
        <p className="indent-9">
          Yaşadığınız apartmanın hijyenik, düzenli ve ferah kalmasını sağlamak
          için profesyonel apartman temizliği hizmeti sunuyoruz. Ortak kullanım
          alanları, merdivenler, asansörler ve giriş bölümleri titizlikle
          temizlenir ve hijyen standartlarına uygun hale getirilir.{" "}
        </p>
        <ul className="px-[1vw]">
          <li>✅ Merdiven ve koridor temizliği</li>
          <li>✅ Asansör ve giriş temizliği</li>
          <li>✅ Çöp alanlarının düzenlenmesi ve temizliği</li>
          <li>✅ Kapı, cam ve trabzan temizliği</li>
        </ul>
        <p className="">
          Apartmanınızın düzenli bakım ve temizliği için bizimle iletişime
          geçin!
        </p>
        <Link
          href={"/iletisim"}
          className="justify-self-end btn btn-secondary transition-transform hover:scale-125"
        >
          İletişime Geçin
        </Link>
      </div>
    </section>
  );
}
export default Services;
