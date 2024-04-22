import { motion } from "framer-motion";
import React from "react";
import { useActiveKeys } from "../Context";
import { keyToNote } from "../../constants";
const Feedback = () => {
  const { activeKeys } = useActiveKeys();

  const getActiveNotes = () => {
    return Object.keys(activeKeys).map((key) => keyToNote[key]);
  };

  const activeNotes = getActiveNotes();

  return (
    <div className="feedback-container bg-gray-100 p-4 rounded-lg shadow-lg">
      <div className="notes-container flex flex-wrap gap-2 justify-center">
        {activeNotes.map((note) => (
          <motion.div
            key={note}
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            exit={{
              scale: 0,
              rotate: 0,
            }}
            transition={{ duration: 0.1 }}
            className="note bg-blue-400 rounded-full py-1 px-2 text-white text-lg font-bold shadow-md">
            {note}🎶
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
