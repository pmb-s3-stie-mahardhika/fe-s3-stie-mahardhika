import { useLanguage } from "@/contexts/LanguageContext";

const AboutCards = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[0, 1, 2].map((idx) => (
            <div key={idx} className="border-2 border-black rounded-lg p-6 md:p-8 bg-white">
              <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-6 md:mb-8" style={{ WebkitTextStroke: "1px #111827" }}>
                {t(`about.cards.${idx}.title`)}
              </h3>
              <h4 className="font-bold text-gray-900 text-base mb-2">{t(`about.cards.${idx}.subtitle`)}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{t(`about.cards.${idx}.description`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCards;
