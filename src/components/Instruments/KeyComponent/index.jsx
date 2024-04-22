import React from "react";
import { motion } from "framer-motion";

const KeyComponent = ({ note, active, onClick, showNotes }) => {
  const noteIsFlat = note.length > 1;
  const keyClassName = noteIsFlat ? "black-key" : "white-key";

  return (
    <motion.div
      className={`border flex items-end justify-center rounded-md ${
        keyClassName === "white-key"
          ? ` ${
              active
                ? "bg-blue-600 shadow-blue-300 transition duration-200"
                : "bg-white"
            }  border-black w-full h-80 `
          : ` ${
              active
                ? "bg-blue-300 shadow-blue-300 transition duration-200"
                : "bg-black"
            }  relative z-10 -ml-4 -mr-4 w-1/2 h-64
          `
      }`}
      onClick={onClick}
      whileTap={{
        scale: 0.9,
        transition: { duration: 0.1 },
      }}
      animate={{
        scale: active ? 1.05 : 1,
        transition: { duration: 0.1 },
      }}>
      <div className={noteIsFlat ? "text-white" : "text-black"}>
        {showNotes ? note : ""}
      </div>
    </motion.div>
  );
};

export default KeyComponent;
