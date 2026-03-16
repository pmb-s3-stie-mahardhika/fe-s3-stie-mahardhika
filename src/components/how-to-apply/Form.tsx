import { useForm } from "react-hook-form";
import { useLanguage } from "@/contexts/LanguageContext";
import { TitleText } from "@/components/ui/title-text";

type FormData = {
  fullName: string;
  email: string;
  whatsapp: string;
  idCard: string;
  diploma: string;
};

const Form = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const { t } = useLanguage();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-20">
        <div className="flex flex-col items-center mb-8 md:mb-16">
          <TitleText>{t("apply.form.header")}</TitleText>
        </div>

        <div className="max-w-4xl mx-auto bg-white border border-gray-200 shadow-xl p-6 sm:p-8 md:p-12 lg:p-16 rounded-3xl">
          <div className="flex flex-col items-center sm:items-start mb-8 md:mb-10 border-b border-gray-100 pb-4 md:pb-6">
            <h3 className="text-xl md:text-3xl font-extrabold text-gray-900 uppercase text-center sm:text-left">{t("apply.form.title")}</h3>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
            <div className="space-y-1.5 md:space-y-2">
              <label className="text-gray-700 font-bold text-xs md:text-sm tracking-wide">{t("apply.form.fields.full_name.label")}</label>
              <input
                {...register("fullName")}
                placeholder={t("apply.form.fields.full_name.placeholder")}
                className="w-full p-3 md:p-3.5 text-sm md:text-base rounded bg-white border-none focus:ring-2 focus:ring-orange-400 outline-none text-gray-700 shadow-sm"
              />
            </div>

            <div className="space-y-1.5 md:space-y-2">
              <label className="text-gray-700 font-bold text-xs md:text-sm tracking-wide">{t("apply.form.fields.email.label")}</label>
              <input
                {...register("email")}
                placeholder={t("apply.form.fields.email.placeholder")}
                className="w-full p-3 md:p-3.5 text-sm md:text-base rounded bg-white border-none focus:ring-2 focus:ring-orange-400 outline-none text-gray-700 shadow-sm"
              />
            </div>

            <div className="space-y-1.5 md:space-y-2">
              <label className="text-gray-700 font-bold text-xs md:text-sm tracking-wide">{t("apply.form.fields.whatsapp.label")}</label>
              <input
                {...register("whatsapp")}
                placeholder={t("apply.form.fields.whatsapp.placeholder")}
                className="w-full p-3 md:p-3.5 text-sm md:text-base rounded bg-white border-none focus:ring-2 focus:ring-orange-400 outline-none text-gray-700 shadow-sm"
              />
            </div>

            <div className="space-y-1.5 md:space-y-2">
              <label className="text-gray-700 font-bold text-xs md:text-sm tracking-wide">{t("apply.form.fields.id_card.label")}</label>
              <input
                {...register("idCard")}
                placeholder={t("apply.form.fields.id_card.placeholder")}
                className="w-full p-3 md:p-3.5 text-sm md:text-base rounded bg-white border-none focus:ring-2 focus:ring-orange-400 outline-none text-gray-700 shadow-sm"
              />
            </div>

            <div className="space-y-1.5 md:space-y-2">
              <label className="text-gray-700 font-bold text-xs md:text-sm tracking-wide">{t("apply.form.fields.diploma.label")}</label>
              <input
                {...register("diploma")}
                placeholder={t("apply.form.fields.diploma.placeholder")}
                className="w-full p-3 md:p-3.5 text-sm md:text-base rounded bg-white border-none focus:ring-2 focus:ring-orange-400 outline-none text-gray-700 shadow-sm"
              />
            </div>

            <div className="flex justify-center pt-6 md:pt-8">
              <button type="submit" className="bg-[#FCA311] hover:bg-orange-500 text-white font-bold py-2.5 md:py-3 px-8 md:px-10 text-sm md:text-base rounded-md transition-colors duration-300">
                {t("apply.form.submit")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
