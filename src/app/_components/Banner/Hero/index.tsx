"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export type ImageType = {
  src: string;
  title: string;
  message: string;
};

const images = [
  {
    src: "/banner/1.jpg",
    title: "Güvenilir Hizmet, Ferah Apartmanlar",
    message: "Apartmanınızda konfor ve hijyen için yanınızdayız",
  },
  {
    src: "/banner/2.jpg",
    title: "Profesyonel Temizlik, Sağlıklı Yaşam",
    message: "Uzman ekibimizle, yaşam alanlarınızı tertemiz yapıyoruz",
  },
  {
    src: "/banner/3.jpg",
    title: "Detaylara Özen – Her Köşede Hijyen",
    message: "Kalite ve titizlikle, apartmanınızın her alanında temizlik",
  },
];

function Hero() {
  const [currentImage, setCurrentImage] = useState<ImageType>(images[0]);
  const { src, title, message } = currentImage;

  const [isFading, setIsFading] = useState(false);
  const [isFade, setIsFade] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setIsFading(true);
    }, 1000);
  }, []);

  useEffect(() => {
    if (isFading) {
      setTimeout(() => {
        setIsFade(true);
      }, 1000);
    }
  }, [isFading]);

  useEffect(() => {
    if (isFade) {
      setIsFading(false);
    }
  }, [isFade]);

  return (
    <div
      className="grow relative
        grid grid-cols-2 grid-rows-2
    "
    >
      <figure
        className={`relative col-span-full row-span-full transition-opacity duration-1000
            ${isFading ? "opacity-0" : ""}
        `}
      >
        <Image src={src} alt="banner1" fill className="object-cover" />
      </figure>
      <div
        className="col-start-1 col-span-1 row-start-1 row-span-1
            z-10 justify-self-center self-center
            grid
            text-white space-y-[2vh]
        "
      >
        <p
          className={`text-4xl font-bold transition-all duration-1000
            ${isFading ? "opacity-0" : ""}
            ${isFade ? "-translate-y-full" : ""}  
        `}
        >
          {title}
        </p>
        <p
          className={`text-xl font-semibold transition-all duration-1000
            ${isFading ? "opacity-0" : ""}   
            ${isFade ? "-translate-x-full" : ""} 
        `}
        >
          {message}
        </p>
        <Link
          href={"/iletisim"}
          className={` justify-self-end btn btn-secondary transition-all duration-1000
             ${isFading ? "opacity-0" : ""}  
            ${isFade ? "translate-x-full" : ""}      
        `}
        >
          İletişime Geç
        </Link>
      </div>
    </div>
  );
}
export default Hero;
