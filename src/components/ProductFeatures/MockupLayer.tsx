"use client"
import { motion, MotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { IProductFeature } from "@/data/productFeatures";

interface Props {
  feature: IProductFeature;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}

const MockupLayer: React.FC<Props> = ({ feature, index, total, scrollYProgress }) => {
  // Hook called at component top level - this is allowed!
  const opacity = useTransform(
    scrollYProgress,
    [
      Math.max(0, (index - 0.5) / (total - 1)),
      index / (total - 1),
      Math.min(1, (index + 0.5) / (total - 1))
    ],
    [0, 1, 0]
  );

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      style={{ opacity }}
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
  );
};

export default MockupLayer;
