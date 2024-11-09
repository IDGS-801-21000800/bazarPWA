/* eslint-disable react/prop-types */
function ResistorDisplay({ value, tolerance }) {
  return (
    <div>
      <h2>Valor de la resistencia: {value.toString()} Ω</h2>
      <h3>Con tolerancia: {tolerance}</h3>
    </div>
  );
}

export default ResistorDisplay;
