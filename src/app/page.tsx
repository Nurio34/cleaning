import About from "./_components/About";
import Services from "./_components/Services";
import Testimonial from "./_components/Testimonial";

export default function Home() {
  return (
    <>
      <main
        className="bg-base-100/80 max-h-screen overflow-auto space-y-[4vh] lg:space-y-0"
        style={{
          backgroundImage: "url('/banner/1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "hue",
          scrollbarWidth: "none",
        }}
      >
        <About />
        <Services />
        <Testimonial />
      </main>
    </>
  );
}
