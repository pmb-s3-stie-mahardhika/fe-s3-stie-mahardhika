import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import { LoadingScreen } from "@/components/global/Loading";
import { useEffect, useState } from "react";

import BackgroundImage1 from "@/assets/foto/VICL0820.webp";

import Hero from "@/components/about/Hero";
import About from "@/components/about/About";
import AboutCards from "@/components/about/AboutCards";
import Department from "@/components/about/Department";
import OurPeople from "@/components/about/OurPeople";
import Gallery from "@/components/about/Gallery";
import ScrollToTop from "@/components/global/ScrollToTop";

import pic_1 from "@/assets/components/about/pic_1.webp";
import pic_2 from "@/assets/components/about/pic_2.webp";
import pic_3 from "@/assets/components/about/pic_3.webp";

const AboutPage = () => {
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
        <About />
        <div className="w-full overflow-hidden">
          <img src={pic_1} alt="Picture" className="w-full h-auto" />
        </div>
        <AboutCards />
        <div className="w-full overflow-hidden">
          <img src={pic_2} alt="Picture" className="w-full h-auto" />
        </div>
        <OurPeople />
        <Gallery />
        <div className="w-full overflow-hidden">
          <img src={pic_3} alt="Picture" className="w-full h-auto" />
        </div>
        <Department />
        <ScrollToTop />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
