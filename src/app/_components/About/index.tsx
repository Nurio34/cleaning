import Image from "next/image";

function About() {
  return (
    <section
      id="kurumsal"
      className="lg:h-screen flex flex-col gap-y-[2vh] lg:grid grid-cols-12 grid-rows-12 isolate"
    >
      <div
        className="hidden lg:block col-start-2 col-end-12 row-start-3 row-end-11 scale-110
        relative -z-10  
      "
      >
        <div className=" w-full h-full rounded bg-primary/20 blur-sm shadow-[0px_20px_30px_-20px_black]"></div>
        <div className="absolute z-20 -top-12 -left-12 text-9xl">✨</div>
      </div>
      <h2
        className="col-start-1 col-span-full row-start-1 row-end-3 self-center justify-self-center text-xl lg:text-5xl font-extrabold pt-[2vh] lg:py-0"
        style={{ fontVariant: "small-caps" }}
      >
        Hakkımızda
      </h2>

      <article
        className=" col-start-2 col-end-6 row-start-3 row-end-11 
          self-center
          lg:text-lg font-semibold lg:leading-7 px-[1vw] lg:px-0
          order-2
        "
      >
        <p className="indent-4 py-2">
          <strong>Apartman ve bina temizliği</strong>, yalnızca bir hizmet
          değil, aynı zamanda yaşam kalitesini artıran temel bir ihtiyaçtır.
          Biz, <strong>profesyonel apartman temizliği</strong> alanında
          uzmanlaşmış ekibimizle, müşterilerimize
          <strong>düzenli</strong>, <strong>hijyenik</strong> ve{" "}
          <strong>sağlıklı yaşam alanları</strong> sunuyoruz.
        </p>

        <p className="indent-4 py-2">
          Deneyimli temizlik personelimiz,{" "}
          <strong>kaliteli temizlik malzemeleri</strong> ve modern ekipmanlar
          kullanarak apartmanların <strong>ortak alanlarını</strong> titizlikle
          temizler. Hizmet kapsamımızda şunlar yer alır:
        </p>

        <ul className="text-start list-disc list-inside py-2">
          <li>Merdiven temizliği</li>
          <li>Asansör temizliği</li>
          <li>Giriş ve koridor temizliği</li>
          <li>Çöp alanlarının düzenlenmesi ve temizliği</li>
          <li>Kapı, cam ve trabzan yüzeylerinin detaylı temizliği</li>
        </ul>

        <p className="indent-4 py-2">
          <strong>Düzenli bakım ve temizlik çözümleri</strong> ile yaşam
          alanlarınızı daha konforlu hale getiriyoruz.
          <strong>Profesyonel</strong>, <strong>güvenilir</strong> ve{" "}
          <strong>uygun fiyatlı apartman temizliği hizmeti</strong> için hemen
          bizimle iletişime geçin.
        </p>
      </article>
      <figure
        className="relative w-full aspect-square lg:aspect-auto col-start-7 col-end-12 row-start-3 row-end-11
            shadow-[0px_20px_50px_-10px_black] order-1"
      >
        <Image
          src={"/sections/about.webp"}
          alt="apartman temizliği hakkında"
          fill
          className="object-cover"
          sizes="(min-width=1023px) 100vw,50vw"
        />
      </figure>
    </section>
  );
}
export default About;
