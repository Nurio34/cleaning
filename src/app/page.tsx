import About from "./_components/About";
import Banner from "./_components/Banner";
import Contact from "./_components/Contact";
import Services from "./_components/Services";
import Testimonial from "./_components/Testimonial";

export default function Home() {
  return (
    <>
      <main
        className="bg-base-100/80 w-full max-h-screen overflow-y-scroll  overflow-x-hidden space-y-[4vh] lg:space-y-0"
        style={{
          backgroundImage: "url('/banner/yatay4.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "hue",
          // scrollbarWidth: "none",
        }}
      >
        <Banner />
        <About />
        <Services />
        <Testimonial />
        <Contact />
      </main>
    </>
  );
}
