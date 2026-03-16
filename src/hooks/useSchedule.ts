import { useLanguage } from "@/contexts/LanguageContext";
import user1 from "@/assets/components/landing/schedule/user-1.webp";
import user2 from "@/assets/components/landing/schedule/user-2.webp";
import user3 from "@/assets/components/landing/schedule/user-3.webp";
import user4 from "@/assets/components/landing/schedule/user-4.webp";
import user5 from "@/assets/components/landing/schedule/user-5.webp";
import user6 from "@/assets/components/landing/schedule/user-6.webp";
import user7 from "@/assets/components/landing/schedule/user-7.webp";
import user8 from "@/assets/components/landing/schedule/user-8.webp";

export interface ScheduleItem {
  id: string;
  name: string;
  course: string;
  descriptions: string[];
  imageUrl: string;
}

export const useSchedule = () => {
  const { t, language } = useLanguage();

  const scheduleIndexes = [0, 1, 2, 3, 4, 5, 6, 7];
  const images = [user1, user2, user3, user4, user5, user6, user7, user8];

  const schedules: ScheduleItem[] = scheduleIndexes.map((index) => {
    const name = t(`landing_schedule.items.${index}.name`);
    const course = t(`landing_schedule.items.${index}.course`);
    const descriptions = t(`landing_schedule.items.${index}.descriptions`, { returnObjects: true }) as unknown as string[];

    return {
      id: String(index + 1),
      name,
      course,
      descriptions,
      imageUrl: images[index]
    };
  });

  return { schedules, language };
};
