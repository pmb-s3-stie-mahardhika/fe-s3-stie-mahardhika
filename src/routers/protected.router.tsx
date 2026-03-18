import { ProtectedRouteProps } from "@/interfaces/routers/protected.interface";
import { authClient } from "@/lib/auth-client";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, roles }: ProtectedRouteProps) => {
  const { data: session, isPending, error } = authClient.useSession();

  // Tampilkan loading hingga sesi diperiksa
  if (isPending)
    return (
      <div className="absolute z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
        <div className="text-white">Loading...</div>
      </div>
    );

  // Jika terjadi error atau tidak ada sesi, arahkan ke halaman login (atau root)
  if (error || !session) return <Navigate to="/" />;

  // Periksa apakah pengguna memiliki salah satu dari peran yang diizinkan
  const user = session.user as { role?: string };
  console.log("Protected Route Checking Role - User Role:", user.role, "Required Roles:", roles);

  if (roles.length > 0) {
    // Jika user tidak punya role atau role nya tidak cocok (case-insensitive)
    if (!user.role || !roles.some((r) => r.toLowerCase() === user.role?.toLowerCase())) {
      console.warn("Access denied. User role doesn't match.", { userRole: user.role, required: roles });
      return <Navigate to="/forbidden" />;
    }
  }

  return children;
};

export default ProtectedRoute;
