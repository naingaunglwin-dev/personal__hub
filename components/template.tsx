'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import React from "react";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";

export default function Template({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
      <div className="bg-dots min-h-screen flex items-center justify-center bg-white text-black w-full font-sans">
        <div className="w-full">
          <NavBar />
            <div className="relative">
              <AnimatePresence mode="wait">
                <main className="mt-16 md:mt-20">
                  <motion.div
                    key={pathname}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                  >
                    {children}
                  </motion.div>
                </main>
              </AnimatePresence>
            </div>
          <Footer />
        </div>
      </div>
  )
}
