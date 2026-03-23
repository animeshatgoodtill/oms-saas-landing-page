"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { productFeatures } from "@/data/productFeatures";
import ProductFeatureItem from "./ProductFeatureItem";

const ProductFeatures: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate which image should be shown based on scroll position
  const imageIndex = useTransform(
    scrollYProgress,
    productFeatures.map((_, i) => i / (productFeatures.length - 1)),
    productFeatures.map((_, i) => i)
  );

  return (
    <div ref={containerRef} className="relative" id="product-features">
      {/* Desktop: Sticky mockup container */}
      <div className="hidden lg:block">
        <div className="sticky top-0 h-screen pointer-events-none">
          <div className="absolute inset-0 flex items-center justify-end pr-8 lg:pr-16">
            <div className="relative w-full max-w-2xl">
              {productFeatures.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    opacity: useTransform(
                      scrollYProgress,
                      [
                        (index - 0.5) / (productFeatures.length - 1),
                        index / (productFeatures.length - 1),
                        (index + 0.5) / (productFeatures.length - 1)
                      ],
                      [0, 1, 0]
                    )
                  }}
                >
                  <div
                    className="relative rounded-2xl overflow-hidden shadow-2xl"
                    style={{
                      transform: "perspective(1000px) rotateY(-8deg) rotateX(2deg)",
                      transformStyle: "preserve-3d"
                    }}
                  >
                    <Image
                      src={feature.imageSrc}
                      alt={feature.imageAlt}
                      width={800}
                      height={600}
                      className="w-full h-auto"
                      quality={95}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling content */}
      <div className="relative">
        {productFeatures.map((feature, index) => (
          <ProductFeatureItem key={feature.id} feature={feature} index={index} />
        ))}
      </div>

      {/* Mobile: Show mockups inline */}
      <div className="lg:hidden">
        {productFeatures.map((feature) => (
          <div
            key={`mobile-${feature.id}`}
            className="px-4 py-12"
            style={{
              background: `linear-gradient(135deg, ${feature.gradient.from} 0%, ${feature.gradient.to} 100%)`
            }}
          >
            <div className="max-w-lg mx-auto">
              <h3 className="text-3xl font-bold mb-4 text-white">{feature.title}</h3>
              <p className="text-lg text-white/90 mb-8">{feature.description}</p>
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={feature.imageSrc}
                  alt={feature.imageAlt}
                  width={600}
                  height={450}
                  className="w-full h-auto"
                  quality={90}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFeatures;
