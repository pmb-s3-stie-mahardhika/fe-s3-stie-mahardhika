import { useLanguage } from "@/contexts/LanguageContext";
import { TitleText } from "@/components/ui/title-text";

const About = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-20">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Left Column: Text */}
          <div className="w-full md:w-1/2 text-gray-600 leading-relaxed text-left md:text-justify">
            <p className="mb-4">{t("about.description")}</p>
          </div>

          {/* Right Column: Title */}
          <div className="w-full md:w-1/2 flex justify-start md:justify-end">
            <div className="flex flex-col items-start md:items-end w-full">
              <TitleText>
                {t("about.title")
                  .split(" ")
                  .map((word, i) => (
                    <span key={i}>
                      {word} {i === 1 ? <br className="hidden md:block" /> : " "}
                    </span>
                  ))}
              </TitleText>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
