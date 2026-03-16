import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";
import LogoGila from "@/assets/components/footer/logo-gila.png";
import LogoMahardhika from "@/assets/components/footer/logo-mahardhika.png";
import "@fontsource/be-vietnam-pro/index.css";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-white py-16 px-6 md:px-24 border-t border-gray-100" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
      <div className="container mx-auto max-w-7xl">
        {/* Top Section - Logos */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16 px-32">
          <img src={LogoMahardhika} alt="STIE Mahardhika" className="h-auto w-56 md:w-160" />
          <img src={LogoGila} alt="Kampus Gila Marketing" className="h-auto w-32 md:w-72" />
        </div>

        {/* Grid Sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16 px-32">
          {/* Contact */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6 text-base">{t("footer.contact.title")}</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                <Mail className="w-4 h-4 text-gray-700 shrink-0" />
                <span>hello@mahardhika.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                <Phone className="w-4 h-4 text-gray-700 shrink-0" />
                <span>+111 91813 23 2309</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                <MapPin className="w-4 h-4 text-gray-700 shrink-0" />
                <span>Somewhere in the World</span>
              </div>
            </div>
          </div>

          {/* Home Links */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6 text-base">{t("footer.home.title")}</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
                  {t("footer.home.links.benefits")}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
                  {t("footer.home.links.courses")}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
                  {t("footer.home.links.testimonials")}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
                  {t("footer.home.links.faq")}
                </a>
              </li>
            </ul>
          </div>

          {/* About Us Links */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6 text-base">{t("footer.about.title")}</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
                  {t("footer.about.links.company")}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
                  {t("footer.about.links.achievements")}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
                  {t("footer.about.links.goals")}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Profiles */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6 text-base">{t("footer.social.title")}</h3>
            <div className="flex gap-4">
              <a href="#" className="w-11 h-11 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-700 transition-transform transform hover:-translate-y-1">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-11 h-11 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-700 transition-transform transform hover:-translate-y-1">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-11 h-11 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-700 transition-transform transform hover:-translate-y-1">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section with Divider */}
        <div className="mt-20 pt-8 border-t border-gray-300 w-full text-center">
          <p className="text-sm font-semibold text-gray-800 tracking-wide mt-2 mb-4">
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
