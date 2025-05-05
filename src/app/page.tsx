import About from "./_components/About";
import Contact from "./_components/Contact";
import Location from "./_components/Loaction";
import Services from "./_components/Services";
import Testimonial from "./_components/Testimonial";

export default function Home() {
  return (
    <>
      <main className="bg-base-100/80 w-full  overflow-x-hidden space-y-[4vh] lg:space-y-0">
        <About />
        <Services />
        <Testimonial />
        <Contact />
        <Location />
      </main>
    </>
  );
}
