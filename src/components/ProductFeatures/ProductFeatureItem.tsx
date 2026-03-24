"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { IProductFeature } from "@/data/productFeatures";

interface Props {
  feature: IProductFeature;
}

const ProductFeatureItem: React.FC<Props> = ({ feature }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Fade in text as it enters viewport
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50]);

  return (
    <div
      ref={ref}
      className="relative min-h-screen flex items-center"
      style={{
        background: `linear-gradient(135deg, ${feature.gradient.from} 0%, ${feature.gradient.to} 100%)`
      }}
    >
      {/* Diagonal stripe pattern overlay - Stripe style */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(255, 255, 255, 0.1) 10px,
            rgba(255, 255, 255, 0.1) 20px
          )`
        }}
      />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            className="text-white z-10"
            style={{ opacity, y }}
          >
            <motion.h3
              className="text-4xl lg:text-5xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {feature.title}
            </motion.h3>
            <motion.p
              className="text-lg lg:text-xl text-white/90 leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {feature.description}
            </motion.p>
          </motion.div>

          {/* Mockup - Hidden on mobile, shown on desktop */}
          <div className="hidden lg:block">
            {/* This will be handled by the sticky container in parent */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFeatureItem;
