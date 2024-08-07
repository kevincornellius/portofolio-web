"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const AnimatedSection = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      {
        rootMargin: "-20% 0px 0% 0px", // Adjust margins to trigger slightly before/after entering/leaving
        threshold: Array.from({ length: 11 }, (_, i) => i / 10), // 0.0, 0.1, 0.2, ..., 1.0
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};
