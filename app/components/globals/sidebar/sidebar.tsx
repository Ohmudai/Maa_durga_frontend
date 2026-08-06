import navbarItems from "../navbar/nav_bar_items";
import { FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
export default function Sidebar({ onClose }: { onClose: () => void }) {
  const pathname = usePathname();
  const firstPath = pathname === "/" ? "/" : `/${pathname.split("/")[1]}`;
  return (
    <div className="md:hidden fixed inset-0 z-1">
      {/* overlay */}
      <div className="absolute inset-0 min-h-screen bg-white/50 backdrop-blur-lg " onClick={onClose} />
      <div className=" min-h-screen  flex items-start justify-start ">
        <motion.div
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          exit={{ x: -300 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="w-64 min-h-screen rounded-tr-2xl rounded-br-2xl border-1 border-white bg-primary backdrop-blur-lg shadow-xl p-6 flex flex-col justify-between" onClick={(e) => e.stopPropagation()}
        >
          <div >
            <div className="flex items-start justify-between mb-6">
              <h2 className="text-xl font-bold text-white">Menu</h2>
              <FiX className="text-xl text-secondary" onClick={onClose} />
            </div>

            <ul className="space-y-4 text-white">
              {navbarItems.map((item) => (
                <li
                  key={item.href}
                  className={`font-semibold border-b-2 border-white/20 pb-2 px-3 py-2 rounded-md cursor-pointer transition-colors
                    ${
                      firstPath === item.href
                        ? "bg-secondary text-white"
                        : "hover:bg-gray-100"
                    }`}
                >
                  <a
                    href={item.href}
                    className=" hover:text-yellow-300 transition"
                    onClick={onClose}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-start ">
            <button className="bg-secondary text-white px-4 py-2 rounded-md">
              Get a Quote
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
