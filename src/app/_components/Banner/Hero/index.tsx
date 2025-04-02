"use client";

import { useEffect, useRef, useState } from "react";
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { src, title, message } = images[currentImageIndex];

  const [isFading, setIsFading] = useState(false);
  const [isFaded, setIsFaded] = useState(false);
  const intRef = useRef<NodeJS.Timeout | null>(null);
  const timeRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (intRef.current) clearInterval(intRef.current);

    intRef.current = setInterval(() => {
      setIsFading(true);
    }, 3000);

    return () => {
      if (intRef.current) clearInterval(intRef.current);
    };
  }, []);

  useEffect(() => {
    if (timeRef.current) clearTimeout(timeRef.current);

    if (isFading) {
      timeRef.current = setTimeout(() => {
        setIsFaded(true);
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 1000);
    }

    return () => {
      if (timeRef.current) clearTimeout(timeRef.current);
    };
  }, [isFading]);

  useEffect(() => {
    if (isFaded && isFading) {
      setIsFading(false);
      setIsFaded(false);
    }
  }, [currentImageIndex]);

  return (
    <div
      className="grow relative
        grid grid-cols-2 grid-rows-2
    "
    >
      <figure
        className={`relative col-span-full row-span-full transition-opacity duration-1000
             ${isFading ? "opacity-25" : ""}
        `}
      >
        <Image src={src} alt="banner1" fill className="object-cover" />
      </figure>
      <div
        className="col-start-1 col-end-3 lg:col-end-2 row-start-1 row-span-1
            z-10 justify-self-center self-center
            grid text-white
           space-y-[2vh] px-[3vw]
        "
        style={{ WebkitTextStroke: "1px black" }}
      >
        <p
          className={`text-3xl lg:text-4xl font-extrabold
            ${
              isFading
                ? "transition-all duration-1000 opacity-0"
                : "opacity-100"
            }
            ${
              isFaded
                ? "transition-none -translate-y-full"
                : "transition-all duration-1000 translate-y-0"
            } 
        `}
        >
          {title}
        </p>
        <p
          className={`text-xl lg:text-2xl font-extrabold
            ${
              isFading
                ? "transition-all duration-1000 opacity-0"
                : "opacity-100"
            }   
            ${
              isFaded
                ? "transition-none -translate-x-full"
                : "transition-all duration-1000 translate-x-0"
            } 
        `}
        >
          {message}
        </p>
        <Link
          href={"/iletisim"}
          className={` justify-self-end btn btn-secondary 
             ${
               isFading
                 ? "transition-all duration-1000 opacity-0"
                 : "opacity-100"
             }  
            ${
              isFaded
                ? "transition-none translate-x-full "
                : "transition-all duration-1000 translate-x-0"
            }      
        `}
          style={{ WebkitTextStroke: "0px black" }}
        >
          İletişime Geç
        </Link>
      </div>
    </div>
  );
}
export default Hero;
