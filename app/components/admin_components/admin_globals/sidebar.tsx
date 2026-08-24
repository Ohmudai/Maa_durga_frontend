"use client";

import sideBarItems from "./sidebar_items";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import api from "@/lib/axios";
export default function AdminSidebar() {
  
  const pathname = usePathname();
  const router = useRouter();
  const logoutMutation = useMutation({
    mutationFn: async () => {
      const response = await api.post("/admin/logout/");

      return response.data;
    },

    onSuccess: () => {
      // Remove access token
      localStorage.removeItem("access_token");

      toast.success("Logged out successfully");

      router.replace("/admin/login");
    },

    onError: () => {
      toast.error("Logout failed");
    },
  });


  return (
    <aside className="fixed top-0 left-0 z-50 h-screen w-64">
      <div className="h-full rounded-tr-2xl rounded-br-2xl border border-white bg-primary shadow-xl p-6 flex flex-col justify-between">

        {/* Menu */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <Link href="/admin/dashboard" className="text-xl font-bold text-white cursor-pointer">
              Menu
            </Link>
          </div>

          {/* Sidebar Items */}
          <ul className="space-y-4 text-white">
            {sideBarItems.map((item) => {
              const isActive =
                pathname === item.href ||
                pathname.startsWith(`${item.href}/`);

              return (
                <li
                  key={item.href}
                  className={`font-semibold border-b-2 border-white/20
                    pb-2 px-3 py-2 rounded-md
                    transition-colors
                    ${
                      isActive
                        ? "bg-secondary text-white"
                        : "hover:bg-gray-100 hover:text-black"
                    }`}
                >
                  <Link
                    href={item.href}
                    className="block transition"
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      <div>
          <button
            onClick={() => logoutMutation.mutate()}
            disabled={logoutMutation.isPending}
            className="bg-secondary text-white px-4 py-2 rounded-md cursor-pointer disabled:opacity-50"
          >
            {logoutMutation.isPending ? "Logging out..." : "Logout"}
          </button>
        </div>
      </div>
    </aside>
  );
}