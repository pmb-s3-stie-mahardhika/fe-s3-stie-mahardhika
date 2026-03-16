import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useMemo } from "react";

export interface CourseData {
  no: string;
  kode: string;
  name: string;
  credits: string;
  semester: string;
  jenis: string;
}

export interface CurriculumCategory {
  title: string;
  subtitle?: string;
  courses: CourseData[];
  totalCredits: string;
  info?: string[];
  requirements?: string[];
}

export const useCurriculum = () => {
  const { t } = useLanguage();
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    matrikulasi: true,
    wajib: true,
    konsentrasi_sdm: true,
    konsentrasi_pemasaran: false,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const matrikulasi = useMemo<CurriculumCategory>(() => ({
    title: t('curriculum.matrikulasi.title'),
    subtitle: t('curriculum.matrikulasi.subtitle'),
    courses: [
      { no: "1", kode: "SMD 001", name: t('curriculum.matrikulasi.course.1'), credits: "3", semester: t('curriculum.table.type'), jenis: t('curriculum.type.required') },
      { no: "2", kode: "SMD 002", name: t('curriculum.matrikulasi.course.2'), credits: "3", semester: t('curriculum.table.type'), jenis: t('curriculum.type.required') },
      { no: "3", kode: "SMD 003", name: t('curriculum.matrikulasi.course.3'), credits: "3", semester: t('curriculum.table.type'), jenis: t('curriculum.type.required') },
    ],
    totalCredits: "9",
    info: [
      t('curriculum.matrikulasi.info.1'),
      t('curriculum.matrikulasi.info.2'),
      t('curriculum.matrikulasi.info.3')
    ]
  }), [t]);

  const wajibProgram = useMemo<CurriculumCategory>(() => ({
    title: t('curriculum.wajib.title'),
    subtitle: t('curriculum.wajib.subtitle'),
    courses: [
      { no: "1", kode: "SMD 5013", name: t('curriculum.wajib.course.1'), credits: "3", semester: "I", jenis: t('curriculum.type.required') },
      { no: "2", kode: "SMD 5033", name: t('curriculum.wajib.course.2'), credits: "3", semester: "I", jenis: t('curriculum.type.required') },
      { no: "3", kode: "SMD 5053", name: t('curriculum.wajib.course.3'), credits: "3", semester: "I", jenis: t('curriculum.type.required') },
      { no: "4", kode: "SMD 6013", name: t('curriculum.wajib.course.4'), credits: "3", semester: "II", jenis: t('curriculum.type.required') },
      { no: "5", kode: "SMD 6033", name: t('curriculum.wajib.course.5'), credits: "3", semester: "II", jenis: t('curriculum.type.required') },
      { no: "6", kode: "SMD 6053", name: t('curriculum.wajib.course.6'), credits: "3", semester: "II", jenis: t('curriculum.type.required') },
      { no: "7", kode: "SMD 7013", name: t('curriculum.wajib.course.7'), credits: "3", semester: "III", jenis: t('curriculum.type.required') }
    ],
    totalCredits: "21",
    requirements: [
      t('curriculum.wajib.req.1'),
      t('curriculum.wajib.req.2'),
      t('curriculum.wajib.req.3'),
      t('curriculum.wajib.req.4')
    ]
  }), [t]);

  const sdm = useMemo<CurriculumCategory>(() => ({
    title: t('curriculum.sdm.title'),
    subtitle: t('curriculum.sdm.subtitle'),
    courses: [
      { no: "1", kode: "SMD 6511", name: t('curriculum.sdm.course.1'), credits: "3", semester: "II", jenis: t('curriculum.type.concentration') },
      { no: "2", kode: "SMD 7523", name: t('curriculum.sdm.course.2'), credits: "3", semester: "III", jenis: t('curriculum.type.concentration') },
      { no: "3", kode: "SMD 7553", name: t('curriculum.sdm.course.3'), credits: "3", semester: "III", jenis: t('curriculum.type.concentration') }
    ],
    totalCredits: "9",
  }), [t]);

  const pemasaran = useMemo<CurriculumCategory>(() => ({
    title: t('curriculum.pemasaran.title'),
    subtitle: t('curriculum.pemasaran.subtitle'),
    courses: [
      { no: "1", kode: "SMD 6711", name: t('curriculum.pemasaran.course.1'), credits: "3", semester: "II", jenis: t('curriculum.type.concentration') },
      { no: "2", kode: "SMD 7723", name: t('curriculum.pemasaran.course.2'), credits: "3", semester: "III", jenis: t('curriculum.type.concentration') },
      { no: "3", kode: "SMD 7753", name: t('curriculum.pemasaran.course.3'), credits: "3", semester: "III", jenis: t('curriculum.type.concentration') }
    ],
    totalCredits: "9",
  }), [t]);

  return {
    matrikulasi,
    wajibProgram,
    sdm,
    pemasaran,
    openSections,
    toggleSection
  };
};
