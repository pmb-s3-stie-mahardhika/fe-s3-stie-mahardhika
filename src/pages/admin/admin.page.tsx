import { useState } from "react";
import AdminHeader from "@/components/admin/Header";
import JenisPendaftaranAdmin from "@/components/admin/settings/JenisPendaftaranAdmin";
import CmsInformasiAdmin from "@/components/admin/settings/CmsInformasiAdmin";
import RoleSettingAdmin from "@/components/admin/settings/RoleSettingAdmin";
import { Settings, LayoutTemplate, ShieldCheck } from "lucide-react";

type TabKey = "jenis-pendaftaran" | "cms-informasi" | "role-admin";

const tabs: { key: TabKey; label: string; icon: React.ElementType }[] = [
  { key: "jenis-pendaftaran", label: "Jenis Pendaftaran", icon: Settings },
  { key: "cms-informasi", label: "CMS Informasi", icon: LayoutTemplate },
  { key: "role-admin", label: "Manajemen Pengguna", icon: ShieldCheck },
];

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("jenis-pendaftaran");

  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-10">
      <AdminHeader />
      <main className="container mx-auto px-4 md:px-8 py-6 md:py-8">
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Pengaturan Sistem</h1>
          <p className="mt-2 text-gray-600">Kelola konfigurasi, konten, dan hak akses admin PMB.</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap lg:flex-nowrap gap-2 lg:gap-1 mb-8 bg-white rounded-xl shadow-sm border border-gray-100 p-1.5 overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 rounded-lg font-semibold text-sm transition-all duration-200 cursor-pointer flex-1 min-w-37.5 justify-center whitespace-nowrap
                  ${isActive ? "bg-blue-600 text-white shadow-sm" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`}
              >
                <Icon className="w-4 h-4 md:w-5 md:h-5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="mt-4">
          {activeTab === "jenis-pendaftaran" && <JenisPendaftaranAdmin />}
          {activeTab === "cms-informasi" && <CmsInformasiAdmin />}
          {activeTab === "role-admin" && <RoleSettingAdmin />}
        </div>
      </main>
    </div>
  );
};

export default AdminPage;
