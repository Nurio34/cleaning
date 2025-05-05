import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-base-100/80">
      <div className="flex justify-evenly items-center py-4">
        <ul className="space-y-[2vw] lg:space-y-2">
          <li>
            <Link
              className="block text-xs lg:text-base text-primary contrast-200 underline underline-offset-2 font-semibold transition-all hover:text-primary/70 hover:scale-110"
              href="/gizlilik"
            >
              Gizlilik Politikası
            </Link>
          </li>
          <li>
            <Link
              className="block text-xs lg:text-base text-primary contrast-200 underline underline-offset-2 font-semibold transition-all hover:text-primary/70 hover:scale-110"
              href="/kvkk"
            >
              KVKK
            </Link>
          </li>
          <li>
            <Link
              className="block text-xs lg:text-base text-primary contrast-200 underline underline-offset-2 font-semibold transition-all hover:text-primary/70 hover:scale-110"
              href="/cerez-politikasi"
            >
              Çerez Politikası
            </Link>
          </li>
          <li>
            <Link
              className="block text-xs lg:text-base text-primary contrast-200 underline underline-offset-2 font-semibold transition-all hover:text-primary/70 hover:scale-110"
              href="/kullanim-kosullari"
            >
              Kullanım Koşulları
            </Link>
          </li>
          <li>
            <Link
              className="block text-xs lg:text-base text-primary contrast-200 underline underline-offset-2 font-semibold transition-all hover:text-primary/70 hover:scale-110"
              href="/#iletişim"
            >
              İletişim
            </Link>
          </li>
        </ul>
        <ul className="flex items-center flex-col lg:flex-row gap-x-4 gap-y-[1vh]">
          <li>
            <Link href={"#"} aria-label="go to our instagram account">
              <figure className="relative w-5 lg:w-7 aspect-square rounded-md overflow-hidden">
                <Image
                  src={"/logo/instagram.webp"}
                  fill
                  alt={`instagram logo`}
                  sizes="28px"
                  className="transition-all hover:scale-110"
                />
              </figure>
            </Link>
          </li>
          <li>
            <Link href={"#"} aria-label="go to our x account">
              <figure className="relative w-5 lg:w-7 aspect-square rounded-md overflow-hidden">
                <Image
                  src={"/logo/x.webp"}
                  fill
                  alt={`x logo`}
                  sizes="28px"
                  className="transition-all hover:scale-110"
                />
              </figure>
            </Link>
          </li>
          <li>
            <Link href={"#"} aria-label="go to our facebook account">
              <figure className="relative w-5 lg:w-7 aspect-square rounded-md overflow-hidden">
                <Image
                  src={"/logo/facebook.webp"}
                  fill
                  alt={`facebook logo`}
                  sizes="28px"
                  className="transition-all hover:scale-110"
                />
              </figure>
            </Link>
          </li>
        </ul>
        <div className="space-y-[1vh] lg:space-y-2">
          <p className="text-base-content/60 font-semibold">Esfira Temizlik</p>
          <p className="text-base-content/60 font-semibold text-[10px] lg:text-xs">
            Topselvi mah.Topselvi cad.Orta sokak.No:2
          </p>
          <p className="text-base-content/60 font-semibold text-[10px] lg:text-xs">
            Kartal/İstanbul
          </p>
          <Link
            href="tel:+905078728758"
            className="block text-base-content/60 font-semibold text-xs underline underline-offset-2 text-[10px] lg:text-xs
              transition-all hover:text-base-content/80 hover:scale-110
            "
          >
            +90 507 872 87 58
          </Link>

          <Link
            href="mailto:mehmetkarademir1967@gmail.com"
            className="block text-base-content/60 font-semibold text-xs underline underline-offset-2 text-[10px] lg:text-xs
              transition-all hover:text-base-content/80 hover:scale-110
            "
          >
            mehmetkarademir1967@gmail.com
          </Link>
          <p className="text-base-content/60 font-semibold text-[10px] lg:text-xs">
            Kartal Vergi Dairesi
          </p>
          <p className="text-base-content/60 font-semibold text-[10px] lg:text-xs">
            {" "}
            Vergi No: 5080316998
          </p>
        </div>
      </div>
      <p className="text-center text-sm text-base-content/90 py-4">
        Bu site yalnızca bilgi ve teklif talepleri içindir. Herhangi bir satış
        veya ödeme işlemi yapılmamaktadır.
      </p>
      <p className="py-4 text-center font-semibold text-sm font-serif">
        ©{new Date().getFullYear()} AparmanTemizliği.com – Tüm Hakları Saklıdır.
      </p>
    </footer>
  );
}
export default Footer;
