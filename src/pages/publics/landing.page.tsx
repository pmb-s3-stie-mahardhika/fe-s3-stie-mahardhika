import Header from "@/components/global/Header";
import Hero from "@/components/landing/Hero";
import Department from "@/components/landing/Department";
import Schedule from "@/components/landing/Schedule";
import Career from "@/components/landing/Career";
import Testimonials from "@/components/landing/Testimonials";
import Cost from "@/components/landing/Cost";
import Quotes from "@/components/landing/Quotes";
import Footer from "@/components/global/Footer";
import { LoadingScreen } from "@/components/global/Loading";
import { useEffect, useState } from "react";

import BackgroundImage1 from "@/assets/foto/VICL0820.webp";
import pic_1 from "@/assets/components/landing/pic_1.webp";
import pic_2 from "@/assets/components/landing/pic_2.webp";
import pic_4 from "@/assets/components/landing/pic_4.webp";
import ScrollToTop from "@/components/global/ScrollToTop";

const Landing = () => {
  const [isLoading, setIsLoading] = useState(!sessionStorage.getItem('hasVisited'));

  useEffect(() => {
    const img = new Image();
    img.src = BackgroundImage1;
    img.onload = () => {
      setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('hasVisited', 'true');
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
        <Department />
        <Schedule />
        <div className="w-full overflow-hidden">
          <img src={pic_1} alt="Picture" className="w-full h-auto" />
        </div>
        <div className="w-full overflow-hidden">
          <img src={pic_4} alt="Picture" className="w-full h-auto" />
        </div>
        <Career />
        <div className="w-full overflow-hidden">
          <img src={pic_2} alt="Picture" className="w-full h-auto" />
        </div>
        <Testimonials />
        <Cost />
        <Quotes />
        <Footer />
        <ScrollToTop />
      </main>
    </div>
  );
};

export default Landing;
