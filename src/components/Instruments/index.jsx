import Guitar from "./Guitar";
import Piano from "./Piano/index.jsx";

const Instruments = ({ selectedInstrument, tone }) => {
  if (!selectedInstrument) {
    return <h1>Selecciona un instrumento</h1>;
  }

  let InstrumentComponent;
  switch (selectedInstrument) {
    case "guitarra":
      InstrumentComponent = Guitar;
      break;
    case "piano":
      InstrumentComponent = Piano;
      break;
    default:
      return null;
  }

  return <InstrumentComponent tone={tone} />;
};

export default Instruments;
