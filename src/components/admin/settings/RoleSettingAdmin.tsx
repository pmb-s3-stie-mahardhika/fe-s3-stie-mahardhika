import { useState, useEffect } from "react";
import { Search, Save, UserCheck, ShieldAlert, Users, Edit2, UserPlus, RefreshCw, X } from "lucide-react";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt: Date;
  banned?: boolean;
}

const RoleSettingAdmin = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [newRole, setNewRole] = useState("mahasiswa");
  const [isUpdating, setIsUpdating] = useState(false);

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      // Fetch users from Better Auth admin plugin
      const res = await authClient.admin.listUsers({
        query: {
          limit: 100, // Adjust as needed
        },
      });
      if (res?.data?.users) {
        setUsers(
           res.data.users.map((u: any) => ({
             id: u.id,
             name: u.name,
             email: u.email,
             role: u.role || "mahasiswa",
             createdAt: new Date(u.createdAt),
             banned: u.banned,
           }))
        );
      }
    } catch (error) {
      console.error("Failed to fetch users:", error);
      toast.error("Gagal mengambil data pengguna dari server.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) => {
    const matchesSearch = user.name.toLowerCase().includes(search.toLowerCase()) || user.email.toLowerCase().includes(search.toLowerCase());
    const matchesRole = roleFilter === "all" || user.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  const handleEditRole = (user: User) => {
    setSelectedUser(user);
    setNewRole(user.role);
    setIsEditModalOpen(true);
  };

  const submitEditRole = async () => {
    if (!selectedUser) return;
    if (selectedUser.role === "admin" && newRole !== "admin") {
      const confirmDeval = window.confirm("Perhatian: Anda akan mencabut hak admin dari pengguna ini. Lanjutkan?");
      if (!confirmDeval) return;
    }

    setIsUpdating(true);
    try {
      const res = await authClient.admin.setRole({
        userId: selectedUser.id,
        role: newRole as any,
      });
      if (res?.error) {
        toast.error(res.error.message || "Gagal mengubah role pengguna");
      } else {
        toast.success(`Role pengguna ${selectedUser.name} berhasil diubah menjadi ${newRole}`);
        setUsers((prev) => prev.map((u) => (u.id === selectedUser.id ? { ...u, role: newRole } : u)));
        setIsEditModalOpen(false);
      }
    } catch (error) {
      toast.error("Terjadi kesalahan saat mengubah role.");
    } finally {
      setIsUpdating(false);
    }
  };

  const handleBanUser = async (user: User) => {
    const action = user.banned ? "membuka blokir" : "memblokir";
    const confirmStr = window.confirm(`Apakah Anda yakin ingin ${action} pengguna ${user.name}?`);
    if (!confirmStr) return;

    try {
      if (user.banned) {
        const res = await authClient.admin.unbanUser({ userId: user.id });
        if (res?.error) throw new Error(res.error.message);
        toast.success(`Blokir pengguna ${user.name} berhasil dibuka`);
        setUsers((prev) => prev.map((u) => (u.id === user.id ? { ...u, banned: false } : u)));
      } else {
        const res = await authClient.admin.banUser({ userId: user.id });
        if (res?.error) throw new Error(res.error.message);
        toast.success(`Pengguna ${user.name} berhasil diblokir`);
        setUsers((prev) => prev.map((u) => (u.id === user.id ? { ...u, banned: true } : u)));
      }
    } catch (error: any) {
      toast.error(error.message || `Gagal ${action} pengguna.`);
    }
  };

  const handleAddUserClick = () => {
    alert("Fitur pendaftaran staf/admin baru harus melalui endpoint khusus, atau admin meng-invite via link.");
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col min-h-[500px]">
      <div className="p-5 border-b border-gray-100 bg-gray-50/50 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-600" />
            Manajemen Pengguna
          </h2>
          <p className="text-sm text-gray-500 mt-1">Kelola data pengguna, hak akses staf kepanitiaan, dan pendaftar.</p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <button onClick={fetchUsers} disabled={isLoading} className="p-2 text-gray-500 hover:text-blue-600 bg-white border border-gray-200 rounded-lg hover:border-blue-200 transition-colors disabled:opacity-50">
            <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
          </button>
          <button onClick={handleAddUserClick} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors shadow-sm whitespace-nowrap flex-1 md:flex-none justify-center">
            <UserPlus className="w-4 h-4" />
            Tambah Pengguna
          </button>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Cari nama atau email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 pr-4 py-2 bg-gray-50/50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full transition-shadow"
          />
        </div>
        <select
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
          className="px-4 py-2 bg-gray-50/50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer min-w-[150px]"
        >
          <option value="all">Semua Role</option>
          <option value="admin">Admin</option>
          <option value="panitia">Panitia</option>
          <option value="pewawancara">Pewawancara</option>
          <option value="mahasiswa">Mahasiswa</option>
        </select>
      </div>

      {/* Data Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100 text-xs uppercase tracking-wider text-gray-500">
              <th className="p-4 font-semibold">Pengguna</th>
              <th className="p-4 font-semibold">Email</th>
              <th className="p-4 font-semibold text-center">Role</th>
              <th className="p-4 font-semibold text-center">Status Akses</th>
              <th className="p-4 font-semibold text-right">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={5} className="p-8 text-center text-gray-500">
                  <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2 text-blue-500" />
                  Memuat data pengguna...
                </td>
              </tr>
            ) : filteredUsers.length === 0 ? (
              <tr>
                <td colSpan={5} className="p-8 text-center text-gray-500">
                  Tidak ada pengguna ditemukan.
                </td>
              </tr>
            ) : (
              filteredUsers.map((user) => (
                <tr key={user.id} className="border-b border-gray-50 hover:bg-blue-50/30 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 text-white flex items-center justify-center font-bold text-xs uppercase shrink-0">
                        {user.name.charAt(0)}
                      </div>
                      <span className="font-semibold text-gray-900 text-sm">{user.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-gray-600">{user.email}</td>
                  <td className="p-4 text-center">
                    <span
                      className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide inline-flex ${
                        user.role === "admin"
                          ? "bg-purple-100 text-purple-700"
                          : user.role === "panitia"
                          ? "bg-blue-100 text-blue-700"
                          : user.role === "pewawancara"
                          ? "bg-teal-100 text-teal-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    {user.banned ? (
                      <span className="text-xs font-semibold text-red-600 bg-red-100 px-2 py-0.5 rounded-full inline-flex items-center gap-1">Blocked</span>
                    ) : (
                      <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-0.5 rounded-full inline-flex items-center gap-1">Active</span>
                    )}
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button onClick={() => handleEditRole(user)} className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-md transition-colors" title="Ubah Role">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button onClick={() => handleBanUser(user)} className={`p-1.5 rounded-md transition-colors ${user.banned ? "text-green-600 hover:bg-green-50" : "text-yellow-600 hover:bg-yellow-50"}`} title={user.banned ? "Unblock User" : "Block User"}>
                        <ShieldAlert className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Edit Role Modal */}
      {isEditModalOpen && selectedUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
              <h3 className="text-lg font-bold text-gray-900">Ubah Role Pengguna</h3>
              <button onClick={() => setIsEditModalOpen(false)} className="text-gray-400 hover:text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-full p-1 transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-1">Nama Pengguna</label>
                <input type="text" readOnly value={selectedUser.name} className="w-full px-3 py-2 bg-gray-100 border border-gray-200 rounded-lg text-sm text-gray-600 cursor-not-allowed" />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Pilih Role Akses</label>
                <div className="grid grid-cols-2 gap-3">
                  {["admin", "panitia", "pewawancara", "mahasiswa"].map((r) => (
                    <div
                      key={r}
                      onClick={() => setNewRole(r)}
                      className={`cursor-pointer border rounded-lg p-3 flex flex-col items-center justify-center text-center transition-all ${
                        newRole === r ? "border-blue-500 bg-blue-50 ring-1 ring-blue-500" : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
                      }`}
                    >
                      <UserCheck className={`w-5 h-5 mb-1 ${newRole === r ? "text-blue-600" : "text-gray-400"}`} />
                      <span className={`text-sm font-semibold capitalize ${newRole === r ? "text-blue-800" : "text-gray-700"}`}>{r}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-end gap-3">
                <button onClick={() => setIsEditModalOpen(false)} className="px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                  Batal
                </button>
                <button onClick={submitEditRole} disabled={isUpdating} className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:opacity-70 flex items-center gap-2">
                  {isUpdating ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                  Simpan Role
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoleSettingAdmin;
