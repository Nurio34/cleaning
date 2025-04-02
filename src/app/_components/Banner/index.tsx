import Header from "./Header";
import Hero from "./Hero";

function Banner() {
  return (
    <div className="w-full h-screen flex flex-col pb-[3vh]">
      <Header />
      <Hero />
    </div>
  );
}
export default Banner;
