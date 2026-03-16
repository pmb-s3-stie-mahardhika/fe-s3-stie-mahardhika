import { useLanguage } from "@/contexts/LanguageContext";
import { TitleText } from "@/components/ui/title-text";

const Method = () => {
  const { t } = useLanguage();
  const methods = [
    {
      title: t("academic.method.items.0.title"),
      description: t("academic.method.items.0.description"),
    },
    {
      title: t("academic.method.items.1.title"),
      description: t("academic.method.items.1.description"),
    },
    {
      title: t("academic.method.items.2.title"),
      description: t("academic.method.items.2.description"),
    },
    {
      title: t("academic.method.items.3.title"),
      description: t("academic.method.items.3.description"),
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-20">
        <div className="mb-12 md:mb-16">
          <TitleText>{t("academic.method.title")}</TitleText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {methods.map((item, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-100 hover:border-[#08C9EC] p-8 md:p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center justify-center min-h-55 md:min-h-70 group transform hover:-translate-y-1"
            >
              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 group-hover:text-[#08C9EC] transition-colors">{item.title}</h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Method;
