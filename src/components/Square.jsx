import React from "react";
import { BiCircle } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
const Square = ({ squareValue, onClick }) => {
  return (
    <button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      className="font-mono text-6xl bg-white dark:bg-gray-800 dark:text-gray-400 h-20 w-20 flex justify-center items-center"
      onClick={onClick}
    >
      <p>
        {squareValue === "X" && <IoClose />}
        {squareValue === "O" && <BiCircle />}
      </p>
    </button>
  );
};

export default Square;
