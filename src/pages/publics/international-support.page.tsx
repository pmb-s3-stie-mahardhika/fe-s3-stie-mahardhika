import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import { LoadingScreen } from "@/components/global/Loading";
import { useEffect, useState } from "react";

import BackgroundImage1 from "@/assets/foto/VICL0820.webp";

import Hero from "@/components/international-support/Hero";
import Title from "@/components/international-support/Title";
import Certified from "@/components/international-support/Certified";
import Sponsor from "@/components/international-support/Sponsor";

import pic_1 from "@/assets/components/international-support/pic_1.webp";
import pic_2 from "@/assets/components/international-support/pic_2.webp";
import ScrollToTop from "@/components/global/ScrollToTop";

const InternationalSupportPage = () => {
  const [isLoading, setIsLoading] = useState(!sessionStorage.getItem("hasVisited"));

  useEffect(() => {
    const img = new Image();
    img.src = BackgroundImage1;
    img.onload = () => {
      setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("hasVisited", "true");
      }, 1000);
    };
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }
  return (
    <div className="bg-light-grey font-sans">
      <Header />
      <main>
        <Hero />
        <Title />
        <div className="w-full overflow-hidden">
          <img src={pic_2} alt="Picture" className="w-full h-auto" />
        </div>
        <Certified />
        <div className="w-full overflow-hidden">
          <img src={pic_1} alt="Picture" className="w-full h-auto" />
        </div>
        <Sponsor />
        <ScrollToTop />
      </main>
      <Footer />
    </div>
  );
};

export default InternationalSupportPage;
