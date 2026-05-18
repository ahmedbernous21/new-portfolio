"use client";

import { motion } from "framer-motion";

export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-grid opacity-[0.35]" />
      <motion.div
        className="bloom absolute -left-[20%] top-[10%] h-[480px] w-[480px]"
        animate={{ x: [0, 40, 0], y: [0, 30, 0], opacity: [0.5, 0.75, 0.5] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="bloom absolute -right-[15%] top-[45%] h-[400px] w-[400px]"
        style={{
          background:
            "radial-gradient(circle, rgba(93, 230, 255, 0.12) 0%, transparent 70%)",
        }}
        animate={{ x: [0, -30, 0], y: [0, -40, 0], opacity: [0.4, 0.65, 0.4] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="bloom absolute bottom-[5%] left-[30%] h-[360px] w-[360px]"
        style={{
          background:
            "radial-gradient(circle, rgba(208, 188, 255, 0.1) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
