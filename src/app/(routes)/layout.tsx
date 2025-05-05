import Backkground from "../_components/Background";
import Banner from "../_components/Banner";
import Footer from "../_components/Footer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Backkground />
      <Banner />
      {children}
      <Footer />
    </>
  );
}
