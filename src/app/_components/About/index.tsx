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
      <p
        className=" col-start-2 col-end-6 row-start-3 row-end-11 
            self-center
            lg:text-lg font-semibold text-center lg:leading-9 px-[1vw] lg:px-0
            order-2
            "
      >
        Temizlik, sadece bir hizmet değil, aynı zamanda yaşam kalitesini artıran
        bir gerekliliktir. Biz, apartman ve bina temizliği konusunda uzmanlaşmış
        ekibimizle, müşterilerimize hijyenik ve sağlıklı yaşam alanları sunmayı
        amaçlıyoruz. Profesyonel ekibimiz, kaliteli temizlik malzemeleri ve
        modern ekipmanlarla en iyi sonucu elde etmek için titizlikle çalışır.
        Müşteri memnuniyetini ön planda tutarak, her köşeyi detaylı bir şekilde
        temizler ve düzenli bakım hizmetleriyle apartmanınızı her zaman ferah
        tutarız. Siz de temiz, hijyenik ve sağlıklı bir apartman ortamı için
        bizimle iletişime geçin!
      </p>
      <figure
        className="relative  w-full aspect-square lg:aspect-auto col-start-7 col-end-12 row-start-3 row-end-11
            shadow-[0px_20px_50px_-10px_black] order-1"
      >
        <Image
          src={"/sections/about.png"}
          alt="banner2"
          fill
          className="object-cover"
        />
      </figure>
    </section>
  );
}
export default About;
