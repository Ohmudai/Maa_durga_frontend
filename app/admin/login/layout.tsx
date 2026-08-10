import {ReactNode} from 'react'
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Login | Maa Durga Electronics",
   icons: {
    icon: "/maa_durga_title_favicon.png",
  },
};
export default function HomeLayout({children}:{children:ReactNode}){
    
    return(
        <div>
            {children}
        </div>
    )
}