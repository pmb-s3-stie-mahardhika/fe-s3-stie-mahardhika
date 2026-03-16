import { useLanguage } from "@/contexts/LanguageContext";

const Slogan = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-[#EAF9FB] shrink-0">
      <div className="container mx-auto px-6 md:px-20 flex flex-col items-center text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary mb-6">
          {t("curriculum.cta.title")}
        </h2>
        
        <p className="text-gray-800 text-lg md:text-xl leading-relaxed max-w-4xl mb-10">
          {t("curriculum.cta.description")}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          <button
            className="w-full sm:w-auto px-8 py-3 bg-primary text-white font-bold rounded-lg hover:brightness-110 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            {t("curriculum.cta.register")}
          </button>
          
          <button
            className="w-full sm:w-auto px-8 py-3 bg-transparent border border-primary text-primary font-bold rounded-lg hover:bg-primary/5 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            {t("curriculum.cta.brochure")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Slogan;
