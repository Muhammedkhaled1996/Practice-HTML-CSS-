"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxWrapper({
  children,
  speed = 0.3,
}: {
  children: React.ReactNode;
  speed?: number;
}) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 1000 * speed]);

  return <motion.div style={{ y }}>{children}</motion.div>;
}