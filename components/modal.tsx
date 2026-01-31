'use client'

import { motion } from 'framer-motion'
import { IoClose } from "react-icons/io5"

interface ModalProps {
  onClose: () => void
  children: React.ReactNode
}

export default function Modal({ onClose, children }: ModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      <motion.div
        className="absolute inset-0 bg-zinc-900/70 md:backdrop-blur-xs"
        onClick={onClose}
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      <motion.div
        className="relative z-10 bg-white rounded-xl shadow-xl w-full max-w-lg p-6 m-4"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition cursor-pointer"
          aria-label="Close modal"
        >
          <IoClose className="w-7 h-7" />
        </button>

        {children}
      </motion.div>
    </div>
  )
}
