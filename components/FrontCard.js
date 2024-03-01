"use client";
import React, { useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import "./BackCard.css";
import chair from "../public/Images/chair.png";
import flower from "../public/Images/flower.png";

import Image from "next/image";
import Star from "./Star";

import MyLogo from "@/public/Images/PicsArt_02-04-08.50.49.png";
const FrontCard = (props) => {
  const [exitX, setExitX] = useState(0);
  const x = useMotionValue(0);
  const scale = useTransform(x, [-150, 0, 150], [0.5, 1, 0.5]);
  const rotate = useTransform(x, [-150, 0, 150], [-45, 0, 45], {
    clamp: false,
  });

  const variantsFrontCard = {
    animate: { scale: 1, y: 0, opacity: 1 },
    exit: (custom) => ({
      x: custom,
      opacity: 0,
      scale: 0.5,
      transition: { duration: 0.2 },
    }),
  };

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -100) {
      setExitX(-250);
      props.setIndex(props.index + 1);
    }
    if (info.offset.x > 100) {
      setExitX(250);
      props.setIndex(props.index + 1);
    }
  };
  return (
    <div className="flex flex-col justify-center pb-5 items-center overflow-hidden rounded-[50px] sticky bg-white w-full h-full">
      <div className="flex flex-row w-full">
        <motion.div
          style={{
            width: 400,
            height: 476,
            position: "",
            top: 0,
            x,
            rotate,
            cursor: "grab",
          }}
          whileTap={{ cursor: "grabbing" }}
          drag={props.drag}
          dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
          onDragEnd={handleDragEnd}
          variants={variantsFrontCard}
          initial="initial"
          animate="animate"
          exit="exit"
          custom={exitX}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="overflow-hidden">
            <div className="w-[400px] h-[476px] absolute rounded-3xl text-white contain pt-20 flex">
              <div className="text-right w-[60%] pt-20 text-bold text-7xl">
                Flower 
              </div>
              <div className="image w-[30%]"></div>
            </div>
          </div>
        </motion.div>
        <div className="pt-[5px] w-full">
          <div className="w-full justify-end pt-2 pr-5 flex">
            <Image src={MyLogo} className="w-28 h-10" />
          </div>
          <div className="w-full pt-[50px] justify-center flex">
            <Star />
          </div>
          <div className="pt-[30px]">
            <table className="w-full text-left pl-20">
              <thead>
                <tr className="h-20">
                  <th className="opacity-0">Name</th>
                  <th>Product</th>
                  <th className="opacity-0">Email</th>
                  <th className="opacity-0">Email</th>
                  <th>No</th>
                </tr>
              </thead>
              <tbody className="w-full">
                <tr className="h-20 bg-gray-200 bg-opacity-50">
                  <td className="text-gray-200 text-opacity-0">John</td>
                  <td>flower</td>
                  <td>110 x 110</td>
                  <td>
                    <Image
                      src={flower}
                      className="object-contain w-24 absolute top-[300px] h-24 p-2"
                    />
                  </td>
                  <td>+</td>
                </tr>
                <tr className="h-20">
                  <td className="text-white">Jane</td>
                  <td>chair</td>
                  <td>110 x 110</td>
                  <td>
                    <Image
                      src={chair}
                      className="object-contain w-24 h-24 p-2"
                    />
                  </td>
                  <td>+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="text-xs opacity-50 pt-5">
      powerd by ksabrineh
      </div>
    </div>
  );
};

export default FrontCard;
