import { TitleText } from "@/components/ui/title-text";
import { useCurriculum, CurriculumCategory } from "@/hooks/useCurriculum";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const AccordionTable = ({ category, isOpen, onToggle, themeColor = "bg-curriculum-header" }: { category: CurriculumCategory; isOpen: boolean; onToggle: () => void; themeColor?: string }) => {
  const { t } = useLanguage();
  
  return (
    <div className="mb-8 border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      {/* Header */}
      <div onClick={onToggle} className={`${themeColor} text-white px-6 py-4 flex items-center justify-between cursor-pointer transition-colors`}>
        <div className="flex items-center gap-4">
          <div className="bg-white/20 p-1.5 rounded-sm">{isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}</div>
          <div>
            <h3 className="font-bold text-lg leading-tight">{category.title}</h3>
            {category.subtitle && <p className="text-sm text-white/90 mt-0.5">{category.subtitle}</p>}
          </div>
        </div>
      </div>

      {/* Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="overflow-hidden bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 font-bold">{t('curriculum.table.no')}</th>
                    <th className="px-6 py-4 font-bold">{t('curriculum.table.code')}</th>
                    <th className="px-6 py-4 font-bold">{t('curriculum.table.name')}</th>
                    <th className="px-6 py-4 font-bold text-center">{t('curriculum.table.sks')}</th>
                    <th className="px-6 py-4 font-bold text-center">{t('curriculum.table.semester')}</th>
                    <th className="px-6 py-4 font-bold text-center">{t('curriculum.table.type')}</th>
                  </tr>
                </thead>
                <tbody>
                  {category.courses.map((course, idx) => (
                    <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-gray-500">{course.no}</td>
                      <td className="px-6 py-4 text-gray-500">{course.kode}</td>
                      <td className="px-6 py-4 font-medium text-gray-900">{course.name}</td>
                      <td className="px-6 py-4 text-center">
                        <span className="bg-curriculum-header text-white py-1 px-3 rounded-md font-bold">{course.credits}</span>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-500">{course.semester}</td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-curriculum-header bg-curriculum-header/10 py-1 px-3 rounded-full text-xs font-semibold">{course.jenis}</span>
                      </td>
                    </tr>
                  ))}
                  {/* Total Row */}
                  <tr className="bg-gray-50 border-t-2 border-gray-200">
                    <td colSpan={3} className="px-6 py-4 text-right font-bold text-gray-900">
                      {category.title === t('curriculum.matrikulasi.title') ? t('curriculum.matrikulasi.total') : category.title === t('curriculum.wajib.title') ? t('curriculum.wajib.total') : category.title.includes("Pemasaran") ? t('curriculum.pemasaran.total') : t('curriculum.sdm.total')}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="bg-curriculum-header text-white py-1 px-3 rounded-md font-bold">{category.totalCredits}</span>
                    </td>
                    <td colSpan={2}></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Additional Info box */}
            {(category.info || category.requirements) && (
              <div className="p-6 bg-white">
                <div className="bg-gray-50 border border-gray-100 rounded-lg p-5">
                  {category.info && (
                    <>
                      <h4 className="font-bold text-gray-900 mb-2">{t('curriculum.matrikulasi.info.title')}</h4>
                      <ul className="list-disc list-outside ml-5 space-y-1 text-sm text-gray-600">
                        {category.info.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  {category.requirements && (
                    <>
                      <h4 className="font-bold text-gray-900 mb-2 mt-4">{t('curriculum.wajib.req.title')}</h4>
                      <ul className="list-disc list-outside ml-5 space-y-1 text-sm text-gray-600">
                        {category.requirements.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div className="bg-white border text-center border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center shadow-xs">
    <div className="text-3xl font-black text-gray-900 mb-2">{value}</div>
    <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">{label}</div>
  </div>
);

const FeatureCard = ({ title, description }: { title: string; description: string }) => (
  <div className="bg-white border text-center border-gray-200 rounded-xl p-6 shadow-xs">
    <h4 className="text-lg font-bold text-gray-900 mb-2">{title}</h4>
    <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
  </div>
);

const Curriculum = () => {
  const { matrikulasi, wajibProgram, sdm, pemasaran, openSections, toggleSection } = useCurriculum();
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-white shrink-0">
      <div className="container mx-auto px-6 md:px-20">
        {/* Header Section */}
        <div className="mb-12">
          <TitleText>{t("curriculum.title")}</TitleText>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed mt-4 max-w-4xl">
            {t("curriculum.description")}
          </p>
        </div>

        {/* Top Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <StatCard value="48" label={t('curriculum.stats.sks_program')} />
          <StatCard value="2" label={t('curriculum.stats.konsentrasi')} />
          <StatCard value="7" label={t('curriculum.stats.semester')} />
          <StatCard value="9" label={t('curriculum.stats.sks_publikasi')} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          <FeatureCard title={t('curriculum.feature.jadwal.title')} description={t('curriculum.feature.jadwal.desc')} />
          <FeatureCard title={t('curriculum.feature.akreditasi.title')} description={t('curriculum.feature.akreditasi.desc')} />
          <FeatureCard title={t('curriculum.feature.publikasi.title')} description={t('curriculum.feature.publikasi.desc')} />
        </div>

        {/* Accordions */}
        <AccordionTable category={matrikulasi} isOpen={openSections.matrikulasi} onToggle={() => toggleSection("matrikulasi")} themeColor="bg-curriculum-header" />

        <AccordionTable category={wajibProgram} isOpen={openSections.wajib} onToggle={() => toggleSection("wajib")} themeColor="bg-curriculum-header" />

        {/* Ringkasan Beban Studi */}
        <div className="mt-16 mb-8">
          <div className="inline-block relative mb-8">
            <TitleText>{t('curriculum.beban.title')}</TitleText>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <StatCard value="39" label={t('curriculum.beban.sks.kuliah')} />
            <StatCard value="9" label={t('curriculum.beban.sks.disertasi')} />
            <StatCard value="9" label={t('curriculum.beban.sks.matrikulasi')} />
            <StatCard value="48" label={t('curriculum.beban.sks.total')} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            <StatCard value="3" label={t('curriculum.beban.waktu.normal')} />
            <StatCard value="5" label={t('curriculum.beban.waktu.max')} />
            <StatCard value="1:9" label={t('curriculum.beban.rasio')} />
          </div>
        </div>

        {/* Konsentrasi */}
        <div className="mb-8">
          <div className="inline-block relative mb-8">
            <TitleText>{t('curriculum.concentration.title')}</TitleText>
          </div>
          <p className="text-gray-500 text-sm mb-6">
            {t('curriculum.concentration.subtitle')}
          </p>

          <AccordionTable category={sdm} isOpen={openSections.konsentrasi_sdm} onToggle={() => toggleSection("konsentrasi_sdm")} />

          <AccordionTable category={pemasaran} isOpen={openSections.konsentrasi_pemasaran} onToggle={() => toggleSection("konsentrasi_pemasaran")} />
        </div>

        {/* Roadmap */}
        <div className="mt-16 mb-8">
          <div className="inline-block relative mb-8">
            <TitleText>{t('curriculum.roadmap.main.title')}</TitleText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="border border-gray-200 rounded-xl p-6 bg-white">
              <h4 className="font-bold text-lg text-gray-900 mb-1">{t('curriculum.roadmap.th1.title')}</h4>
              <p className="text-sm text-gray-400 mb-4">{t('curriculum.roadmap.th1.sub')}</p>
              <ul className="list-disc list-outside ml-4 text-sm text-gray-600 space-y-1">
                <li>{t('curriculum.roadmap.th1.1')}</li>
                <li>{t('curriculum.roadmap.th1.2')}</li>
                <li>{t('curriculum.roadmap.th1.3')}</li>
                <li>{t('curriculum.roadmap.th1.4')}</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-xl p-6 bg-white">
              <h4 className="font-bold text-lg text-gray-900 mb-1">{t('curriculum.roadmap.th2.title')}</h4>
              <p className="text-sm text-gray-400 mb-4">{t('curriculum.roadmap.th2.sub')}</p>
              <ul className="list-disc list-outside ml-4 text-sm text-gray-600 space-y-1">
                <li>{t('curriculum.roadmap.th2.1')}</li>
                <li>{t('curriculum.roadmap.th2.2')}</li>
                <li>{t('curriculum.roadmap.th2.3')}</li>
                <li>{t('curriculum.roadmap.th2.4')}</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-xl p-6 bg-white">
              <h4 className="font-bold text-lg text-gray-900 mb-1">{t('curriculum.roadmap.th3.title')}</h4>
              <p className="text-sm text-gray-400 mb-4">{t('curriculum.roadmap.th3.sub')}</p>
              <ul className="list-disc list-outside ml-4 text-sm text-gray-600 space-y-1">
                <li>{t('curriculum.roadmap.th3.1')}</li>
                <li>{t('curriculum.roadmap.th3.2')}</li>
                <li>{t('curriculum.roadmap.th3.3')}</li>
                <li>{t('curriculum.roadmap.th3.4')}</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-xl p-6 bg-white">
              <h4 className="font-bold text-lg text-gray-900 mb-4">{t('curriculum.keunggulan.title')}</h4>
              <ul className="list-disc list-outside ml-4 text-sm text-gray-600 space-y-1">
                <li>{t('curriculum.keunggulan.1')}</li>
                <li>{t('curriculum.keunggulan.2')}</li>
                <li>{t('curriculum.keunggulan.3')}</li>
                <li>{t('curriculum.keunggulan.4')}</li>
                <li>{t('curriculum.keunggulan.5')}</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-xl p-6 bg-white">
              <h4 className="font-bold text-lg text-gray-900 mb-4">{t('curriculum.prospek.title')}</h4>
              <ul className="list-disc list-outside ml-4 text-sm text-gray-600 space-y-1">
                <li>{t('curriculum.prospek.1')}</li>
                <li>{t('curriculum.prospek.2')}</li>
                <li>{t('curriculum.prospek.3')}</li>
                <li>{t('curriculum.prospek.4')}</li>
                <li>{t('curriculum.prospek.5')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
