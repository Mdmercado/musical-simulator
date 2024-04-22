import React, { useState } from "react";
import * as Tone from "tone";
import KeyboardEventHandler from "react-keyboard-event-handler";
import KeyComponent from "../KeyComponent";
import Toggle from "../../Tooggle";
import { keyToNote } from "../../../constants";
import { useActiveKeys } from "../../Context";

const Piano = ({ tone }) => {
  const { activeKeys, handleKeyDown, handleKeyUp } = useActiveKeys();
  const [showNotes, setShowNotes] = useState(false);

  const synth = new Tone.Synth().toDestination();

  const playNote = (note) => {
    synth.triggerAttackRelease(note, tone);
  };

  const handleKeyClick = (key) => {
    handleKeyDown(key);
    const note = keyToNote[key];
    if (note) {
      playNote(`${note}4`);
    }
    setTimeout(() => handleKeyUp(key), 350);
  };

  return (
    <section className="piano-container ">
      <Toggle showNotes={showNotes} setShowNotes={setShowNotes} />
      <KeyboardEventHandler
        handleKeys={Object.keys(keyToNote)}
        handleEventType="keydown"
        onKeyEvent={(key) => {
          handleKeyDown(key);
          const note = keyToNote[key];
          if (note) {
            playNote(`${note}4`);
          }
        }}
      />
      <KeyboardEventHandler
        handleKeys={Object.keys(keyToNote)}
        handleEventType="keyup"
        onKeyEvent={(key) => {
          handleKeyUp(key);
          const note = keyToNote[key];
          if (note) {
            synth.triggerRelease(`${note}4`);
          }
        }}
      />
      <div className="flex mt-5 shadow-lg">
        {Object.entries(keyToNote).map(([key, note]) => (
          <KeyComponent
            key={key}
            note={note}
            active={activeKeys[key]}
            onClick={() => handleKeyClick(key)}
            showNotes={showNotes}
          />
        ))}
      </div>
    </section>
  );
};

export default Piano;
