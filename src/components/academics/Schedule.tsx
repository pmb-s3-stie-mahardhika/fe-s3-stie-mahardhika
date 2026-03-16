import { useSchedule } from "@/hooks/useSchedule";
import { TitleText } from "../ui/title-text";
import { useLanguage } from "@/contexts/LanguageContext";

const Schedule = () => {
  const { schedules } = useSchedule();
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-linear-to-b from-white to-gray-200 shrink-0">
      <div className="container mx-auto px-4 md:px-20">
        <div className="mb-12">
          <TitleText>{t("landing_schedule.title")}</TitleText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {schedules.map((schedule) => (
            <div key={schedule.id} className="bg-white rounded-sm p-8 shadow-sm border border-gray-200 transition-all">
              <div className="w-full h-48 md:h-80 rounded-sm border-2 border-gray-500 mb-6 overflow-hidden flex items-end justify-center bg-white pt-4">
                <img src={schedule.imageUrl} alt={schedule.name} className="w-auto h-full object-contain object-bottom" />
              </div>

              <h3 className="text-xl font-extrabold text-gray-900">{schedule.name}</h3>
              <div className="text-sm font-semibold text-gray-600 mt-1 mb-4">{schedule.course}</div>

              <div className="space-y-4 text-sm font-medium text-gray-500 leading-relaxed italic text-justify">
                {schedule.descriptions.map((desc, idx) => (
                  <p key={idx} className="text-justify">
                    {desc}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
