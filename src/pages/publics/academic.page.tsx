import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import { LoadingScreen } from "@/components/global/Loading";
import { useEffect, useState } from "react";

import BackgroundImage1 from "@/assets/foto/VICL0820.webp";

import Hero from "@/components/academics/Hero";
import Vision from "@/components/academics/Vision";
import Competence from "@/components/academics/Competence";
import Curriculum from "@/components/academics/Curriculum";
import Method from "@/components/academics/Method";
import Schedule from "@/components/academics/Schedule";
import Slogan from "@/components/academics/Slogan";
import ScrollToTop from "@/components/global/ScrollToTop";

import pic_1 from "@/assets/components/academics/pic_1.webp";
import pic_2 from "@/assets/components/academics/pic_2.webp";

const AcademicPage = () => {
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
        <Vision />
        <Competence />
        <div className="w-full overflow-hidden">
          <img src={pic_1} alt="Picture" className="w-full h-auto" />
        </div>
        <Schedule />
        <Method />
        <div className="w-full overflow-hidden">
          <img src={pic_2} alt="Picture" className="w-full h-auto" />
        </div> 
        <Curriculum />
        <Slogan />
        <ScrollToTop />
      </main>
      <Footer />
    </div>
  );
};

export default AcademicPage;
