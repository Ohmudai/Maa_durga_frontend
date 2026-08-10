import {ReactNode} from 'react'
import type { Metadata } from "next";
import Footer from '../components/globals/footer/footer';
import NavBar from '../components/globals/navbar/nav_bar';
export const metadata: Metadata = {
  title: "Home | Maa Durga Electronics",
   icons: {
    icon: "/maa_durga_title_favicon.png",
  },
};
export default function HomeLayout({children}:{children:ReactNode}){
    
    return(
        <div>
            <NavBar/>
            {children}
            <Footer/>
        </div>
    )
}