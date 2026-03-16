import { useLanguage } from "@/contexts/LanguageContext";
import TestimonialCard from "@/components/ui/testimonial-card";
import { TitleText } from "@/components/ui/title-text";

// Images
import testimonial_user_1 from "@/assets/components/landing/testimonials/testimonial_user_1.png";
import testimonial_user_2 from "@/assets/components/landing/testimonials/testimonial_user_2.png";
import testimonial_user_3 from "@/assets/components/landing/testimonials/testimonial_user_3.png";
import testimonial_user_4 from "@/assets/components/landing/testimonials/testimonial_user_4.png";

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonialsData = [
    {
      quote: t("testimonials.items.0.quote"),
      avatar: testimonial_user_1,
      name: t("testimonials.items.0.name"),
      title1: t("testimonials.items.0.title1"),
      title2: t("testimonials.items.0.title2"),
    },
    {
      quote: t("testimonials.items.1.quote"),
      avatar: testimonial_user_2,
      name: t("testimonials.items.1.name"),
      title1: t("testimonials.items.1.title1"),
      title2: t("testimonials.items.1.title2"),
    },
    {
      quote: t("testimonials.items.2.quote"),
      avatar: testimonial_user_3,
      name: t("testimonials.items.2.name"),
      title1: t("testimonials.items.2.title1"),
      title2: t("testimonials.items.2.title2"),
    },
    {
      quote: t("testimonials.items.3.quote"),
      avatar: testimonial_user_4,
      name: t("testimonials.items.3.name"),
      title1: t("testimonials.items.3.title1"),
      title2: t("testimonials.items.3.title2"),
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-linear-to-b from-white to-gray-200 shrink-0">
      <div className="container mx-auto px-4 md:px-20">
        <div className="mb-12">
          <TitleText>{t("testimonials.title")}</TitleText>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} quote={testimonial.quote} avatar={testimonial.avatar} name={testimonial.name} title1={testimonial.title1} title2={testimonial.title2} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
