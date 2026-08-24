import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { toast } from "sonner";
import AdminSidebar from "@/app/components/admin_components/admin_globals/sidebar";

export default async function ProtectedAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();

  const refreshToken = cookieStore.get("refresh_token");

  if (!refreshToken) {
    redirect("/admin/login");
    
  }

  try {
     await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/auth/check/`,
      {
        headers: {
          Cookie: `refresh_token=${refreshToken.value}`,
        },
      }
    );
    
    return (
      <div className=" min-h-screen">
        <AdminSidebar />

        <main className="ml-70 pt-5 min-h-screen">
          {children}
        </main>
      </div>
    );

  }catch (error) {
  toast.error("Invalid or expired refresh token")
  redirect("/admin/login");
}
}