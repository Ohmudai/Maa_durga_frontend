import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

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
    return <>{children}</>;

  }catch (error) {
  if (axios.isAxiosError(error)) {
    console.log("AUTH CHECK STATUS:", error.response?.status);
    console.log("AUTH CHECK DATA:", error.response?.data);
  } else {
    console.log("UNKNOWN ERROR:", error);
  }

  redirect("/admin/login");
}
}