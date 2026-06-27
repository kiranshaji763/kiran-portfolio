"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  className?: string;
}

export default function AnimateIn({ children, delay = 0, direction = "up", className }: Props) {
  const initial =
    direction === "up" ? { opacity: 0, y: 40 }
    : direction === "left" ? { opacity: 0, x: -40 }
    : direction === "right" ? { opacity: 0, x: 40 }
    : { opacity: 0 };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
