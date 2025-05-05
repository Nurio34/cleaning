import Image from "next/image";
import { FaStar } from "react-icons/fa";

function Testimonial() {
  return (
    <section
      id="referanslar"
      className="lg:min-h-screen flex flex-col gap-y-[2vh] lg:grid grid-cols-12 grid-rows-12 isolate"
    >
      <div
        className="hidden lg:block col-start-2 col-end-12 row-start-3 row-end-11 scale-110
        relative -z-10 
      "
      >
        <div className=" w-full h-full rounded bg-accent/20 blur-sm shadow-[0px_20px_30px_-20px_black]"></div>
        <figure
          className="absolute z-20 -top-11 -left-11  w-20 aspect-square rounded-full overflow-hidden"
          style={{ fontFamily: "fantasy" }}
        >
          <Image
            src={"/testimonial/1.png"}
            alt="apartman temizliği hizmetini kullananların yorumları"
            fill
            sizes="(min-width=1023px) 100vw,50vw"
          />
        </figure>
      </div>
      <div
        className=" col-start-2 col-end-6 row-start-3 row-end-11 
            self-center
            lg:text-lg font-semibold text-center lg:leading-9 px-[1vw] lg:px-0
 space-y-[2vh]
            "
      >
        <h2
          className="text-xl font-extrabold flex items-center justify-center"
          style={{ fontVariant: "small-caps" }}
        >
          <span className="text-5xl">💬</span> Müşterilerimiz Ne Diyor?
        </h2>
        <p className="indent-9">
          Müşteri memnuniyeti bizim için her şeyden önemli! Aldığımız geri
          bildirimlerle hizmet kalitemizi her geçen gün daha da ileriye
          taşıyoruz. İşte bizden hizmet alan müşterilerimizin deneyimleri.😊
        </p>
      </div>
      <div
        className="relative  w-full aspect-square lg:aspect-auto col-start-7 col-end-12 row-start-3 row-end-11
            shadow-[0px_20px_50px_-10px_black] order-1 "
      >
        <ul className="h-full grid lg:grid-cols-[repeat(2,0.3fr)] gap-x-[2vw] place-content-center">
          <li
            className="shadow-[0px_10px_30px_-10px_black] rounded-bl-lg rounded-br-lg
            flex flex-col max-w-96
          "
          >
            <figure className="relative w-full lg:w-56 aspect-video">
              <Image
                src={"/testimonial/client1.jpeg"}
                alt="apartman temizliği kullanan müşteri"
                fill
                sizes="(min-width=1023px) 100vw,50vw"
              />
            </figure>
            <div className="grow relative px-2 bg-white rounded-bl-lg rounded-br-lg space-y-1 py-4">
              <figure className="absolute -top-4 left-4 w-8 aspect-square rounded-full overflow-hidden">
                <Image
                  src={"/testimonial/1.png"}
                  alt="svg"
                  fill
                  className="object-cover"
                  sizes="(min-width=1023px) 100vw,50vw"
                />
              </figure>
              <h2 className="text-lg font-semibold">
                Apartmanımız her zaman tertemiz
              </h2>
              <p>
                Düzenli olarak aldığımız temizlik hizmeti sayesinde apartmanımız
                her zaman hijyenik ve ferah. Ekibiniz gerçekten harika.
              </p>
              <div className="grid grid-cols-[repeat(2,auto)] items-center">
                <div className="flex text-orange-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="grid justify-items-end">
                  <p className="text-sm font-semibold">Ahmet K.</p>
                  <p className="text-xs font-bold">Apartman Yöneticisi</p>
                </div>
              </div>
            </div>
          </li>
          <li
            className="shadow-[0px_10px_30px_-10px_black] rounded-bl-lg rounded-br-lg
            hidden lg:flex flex-col
          "
          >
            <figure className="relative w-56 aspect-video">
              <Image
                src={"/testimonial/client2.jpeg"}
                alt="apartman temizliği kullanan müşteri"
                fill
                sizes="(min-width=1023px) 100vw,50vw"
              />
            </figure>
            <div className="grow relative px-2 bg-white rounded-bl-lg rounded-br-lg space-y-1 py-4">
              <figure className="absolute -top-4 left-4 w-8 aspect-square rounded-full overflow-hidden">
                <Image
                  src={"/testimonial/1.png"}
                  alt="svg"
                  fill
                  className="object-cover"
                />
              </figure>
              <h2 className="text-lg font-semibold">
                Hijyen konusunda çok başarılılar!
              </h2>
              <p>
                Merdivenlerden asansöre kadar her alan pırıl pırıl oluyor. Düze
              </p>
              <div className="grid grid-cols-[repeat(2,auto)] items-center">
                <div className="flex text-orange-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="grid justify-items-end">
                  <p className="text-sm font-semibold">Mehmet A.</p>
                  <p className="text-xs font-bold">Apartman Sakini</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
export default Testimonial;
