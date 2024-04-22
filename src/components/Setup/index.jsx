function Setup({ setTones }) {
  const TONES = [
    { value: "8n", label: "8n" },
    { value: "4n", label: "4n" },
    { value: "2n", label: "2n" },
  ];

  const handleChange = (e) => {
    setTones(e.target.value);
  };

  return (
    <div className="flex flex-col gap-y-3">
      <h1 className="text-3xl">Simulador de Piano</h1>
      <div className="flex justify-between items-center">
        {" "}
        <label htmlFor="instrument-select">Seleccionar tono</label>
        <select
          id="instrument-select"
          name="instrument-select"
          className="p-2 border-2 border-gray-300 rounded-md w-1/3"
          onChange={handleChange}
          defaultValue={TONES[0].value}>
          {TONES.map((tone) => (
            <option key={tone.value} value={tone.value}>
              {tone.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Setup;
