import React from "react";

const Toggle = ({ showNotes, setShowNotes }) => {
  return (
    <div className="flex items-center border border-gray-200 p-4 rounded-md w-fit cursor-pointer">
      <label htmlFor="show-notes" className="mr-2">
        {showNotes ? "Ocultar notas" : "Mostrar notas"}
      </label>
      <input
        className={
          "border-2 border-gray-300 rounded-md p-2 text-gray-700" +
          " " +
          (showNotes ? "bg-blue-300" : "bg-white")
        }
        type="checkbox"
        id="show-notes"
        checked={showNotes}
        onChange={() => setShowNotes(!showNotes)}
      />
    </div>
  );
};

export default Toggle;
