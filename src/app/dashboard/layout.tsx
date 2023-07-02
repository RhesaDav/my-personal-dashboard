'use client'
import { Header } from "@/components/layouts/header/Header";
import { Sidebar } from "@/components/layouts/sidebar/Sidebar";
import { usePathname } from "next/navigation";
import { Props } from "next/script";
import { motion, AnimatePresence } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Layout({ children }: Props) {
  const pathname = usePathname();

  return (
    <div>
      <main className="flex">
        <div className="flex-none">
          <Sidebar />
        </div>
        <div className="flex-1 ">
          <Header />
          <AnimatePresence>
            <motion.div
              className="m-5"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}



