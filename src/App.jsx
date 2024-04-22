import { useState } from "react";
import Instruments from "./components/Instruments";
import Setup from "./components/Setup";
import Feedback from "./components/Feedback";

const App = () => {
  const [tone, setTone] = useState("8n");
  const [selectedInstrument, setSelectedInstrument] = useState("piano");
  return (
    <div>
      <main className="p-4 flex flex-col gap-y-5 md:w-4/5 md:m-auto">
        <Setup setTones={setTone} />
        <Instruments selectedInstrument={selectedInstrument} tone={tone} />
        <Feedback />
      </main>
    </div>
  );
};

export default App;
