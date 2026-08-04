"use client";
import Sidebar from "../sidebar/sidebar";
import navbarItems from "./nav_bar_items";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { AnimatePresence } from "framer-motion";
export default function NavBar() {
  const pathName = usePathname();
  const router = useRouter();
  const [isSiderbarOpen, setIsSidebarOpen] = useState(false);
  return (
    <nav className=" flex items-center  md:px-8 border-b-2 border-gray-200 fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-md h-20">
      {/* Left */}
      <div className="flex-1 cursor-pointer" onClick={() => router.push("/")}>
        <img src="/maa_durga_logo.png" width="110" alt="Maa Durga Logo" />
      </div>

      {/* Center */}
      <div className="md:flex hidden flex-1 flex justify-center ">
        <ul className="flex gap-x-15">
          {navbarItems.map((item) => (
            <li key={item.href}>
              <a
                className={`whitespace-nowrap text-primary hover:underline hover:decoration-wavy hover:decoration-secondary font-semibold ${pathName === item.href ? "underline decoration-primary decoration-wavy" : ""}`}
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Right */}
      <div className="hidden flex-1 md:flex justify-end ">
        <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary hover:cursor-pointer transition-colors duration-300">
          Get a Quote
        </button>
      </div>
      <div className="md:hidden flex-1 flex justify-end ">
        <button
          className="md:hidden ml-4 p-2 rounded-md hover:bg-gray-200 transition-colors duration-300"
          onClick={() => setIsSidebarOpen(!isSiderbarOpen)}
        >
          <FiMenu className="text-3xl" />
        </button>
      </div>
      <AnimatePresence mode="wait">
        {isSiderbarOpen && <Sidebar onClose={() => setIsSidebarOpen(false)} />}
      </AnimatePresence>
    </nav>
  );
}
