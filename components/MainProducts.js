"use client"
import React, { useState } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import BackCard from "./BackCard";
import FrontCard from "./FrontCard";
import Star from "./Star";


export const MainProducts = () => {
    const [index, setIndex] = useState(0);

    return (
        <div className="w-full">
        <motion.div style={{ position: "relative" }}>
            <AnimatePresence initial={false}>
                {index % 2 === 0 ? (
                    <BackCard key={index} index={index} setIndex={setIndex} drag="x" />
                ) : (
                    <FrontCard key={index} index={index} setIndex={setIndex} drag="x" />
                )}
            </AnimatePresence>
        </motion.div>
        
      
        </div>
    );
};
