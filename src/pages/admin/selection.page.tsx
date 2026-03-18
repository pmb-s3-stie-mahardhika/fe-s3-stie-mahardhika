import { useState } from "react";
import AdminHeader from "@/components/admin/Header";
import FilterForm from "@/components/admin/selection/FilterForm";
import SelectionDataTable, { type SelectionPendaftar } from "@/components/admin/selection/SelectionDataTable";

const dummyData: SelectionPendaftar[] = [
  {
    noPendaftaran: "202511510693",
    nama: "JULYA NATASYA DARMAWAN",
    statusWawancara: "Selesai",
    prodiOptions: [{ value: "Ilmu Manajemen (S3)", label: "Ilmu Manajemen (S3)" }],
    selectedProdi: "Ilmu Manajemen (S3)",
    prodiDiterima: "-",
    status: "-",
    actionStatus: "-",
    cetakStatus: "Belum Diterima",
    isToggled: false,
  },
  {
    noPendaftaran: "202511510682",
    nama: "MOHAMAD FATKHUR ROFIQ",
    statusWawancara: "Belum Dijadwalkan",
    prodiOptions: [{ value: "MANAJEMEN (S1)", label: "MANAJEMEN (S1)" }],
    selectedProdi: "MANAJEMEN (S1)",
    prodiDiterima: "-",
    status: "-",
    actionStatus: "-",
    cetakStatus: "Belum Diterima",
    isToggled: false,
  },
  {
    noPendaftaran: "202511510701",
    nama: "ANDI SANTOSO",
    statusWawancara: "Selesai",
    prodiOptions: [{ value: "AKUNTANSI (S1)", label: "AKUNTANSI (S1)" }, { value: "MANAJEMEN (S1)", label: "MANAJEMEN (S1)" }],
    selectedProdi: "AKUNTANSI (S1)",
    prodiDiterima: "-",
    status: "-",
    actionStatus: "-",
    cetakStatus: "Belum Diterima",
    isToggled: false,
  },
  {
    noPendaftaran: "202511510702",
    nama: "SITI AMINAH",
    statusWawancara: "Selesai",
    prodiOptions: [{ value: "Ilmu Manajemen (S2)", label: "Ilmu Manajemen (S2)" }],
    selectedProdi: "Ilmu Manajemen (S2)",
    prodiDiterima: "-",
    status: "-",
    actionStatus: "-",
    cetakStatus: "Belum Diterima",
    isToggled: false,
  },
  {
    noPendaftaran: "202511510703",
    nama: "BUDI DARMA",
    statusWawancara: "Belum Dijadwalkan",
    prodiOptions: [{ value: "MANAJEMEN (S1)", label: "MANAJEMEN (S1)" }],
    selectedProdi: "MANAJEMEN (S1)",
    prodiDiterima: "-",
    status: "-",
    actionStatus: "-",
    cetakStatus: "Belum Diterima",
    isToggled: false,
  },
  {
    noPendaftaran: "202511510704",
    nama: "RATNA SARI",
    statusWawancara: "Selesai",
    prodiOptions: [{ value: "AKUNTANSI (S1)", label: "AKUNTANSI (S1)" }],
    selectedProdi: "AKUNTANSI (S1)",
    prodiDiterima: "-",
    status: "-",
    actionStatus: "-",
    cetakStatus: "Belum Diterima",
    isToggled: false,
  },
];

const SelectionPage = () => {
  const [showTable, setShowTable] = useState(false);
  const [data, setData] = useState<SelectionPendaftar[]>([]);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const handleFilterSubmit = (filters: { jalur: string; semester: string; tahun: string }) => {
    // Simulate fetching data based on filters
    console.log("Filter submitted:", filters);
    setData(dummyData);
    setShowTable(true);
  };

  const handleCetakData = () => {
    console.log("Cetak Data clicked");
  };

  const handleRowProdiChange = (noPendaftaran: string, newProdi: string) => {
    setData((prev) => prev.map((item) => (item.noPendaftaran === noPendaftaran ? { ...item, selectedProdi: newProdi } : item)));
  };

  const handleRowToggle = (noPendaftaran: string, toggled: boolean) => {
    setData((prev) => prev.map((item) => (item.noPendaftaran === noPendaftaran ? { ...item, isToggled: toggled } : item)));
  };

  const handleSelectAllToggle = (toggled: boolean) => {
    setData((prev) => prev.map((item) => (item.isAccepted ? item : { ...item, isToggled: toggled })));
  };

  const handleTerimaClick = () => {
    setIsConfirmModalOpen(true);
  };

  const handleConfirmTerima = () => {
    setData((prev) =>
      prev.map((item) => {
        if (item.isToggled && !item.isAccepted) {
          return {
            ...item,
            cetakStatus: "Sudah Diterima",
            isToggled: false,
            actionStatus: item.selectedProdi,
            selectedProdi: "-",
            prodiOptions: [],
            isAccepted: true,
          };
        }
        return item;
      }),
    );
    setIsConfirmModalOpen(false);
  };

  const handleRowCetak = (noPendaftaran: string) => {
    console.log("Row cetak clicked:", noPendaftaran);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-10">
      <AdminHeader />
      <main className="container mx-auto px-4 md:px-8 py-6 md:py-8 space-y-6">
        <FilterForm onSubmit={handleFilterSubmit} />
        {showTable && (
          <SelectionDataTable
            data={data}
            onCetakData={handleCetakData}
            onRowProdiChange={handleRowProdiChange}
            onRowToggle={handleRowToggle}
            onSelectAllToggle={handleSelectAllToggle}
            onRowCetak={handleRowCetak}
            onTerima={handleTerimaClick}
          />
        )}

        {/* Confirmation Modal */}
        {isConfirmModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4 shadow-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Konfirmasi Kelulusan</h3>
              <p className="text-sm text-gray-600 mb-6">Apakah Anda yakin ingin meluluskan pendaftar yang telah dipilih? Tindakan ini tidak dapat dibatalkan.</p>
              <div className="flex justify-end gap-3 mt-2">
                <button onClick={() => setIsConfirmModalOpen(false)} className="px-5 py-2.5 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer">
                  Batal
                </button>
                <button onClick={handleConfirmTerima} className="px-5 py-2.5 text-sm font-semibold text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors cursor-pointer">
                  Ya, Luluskan
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default SelectionPage;
