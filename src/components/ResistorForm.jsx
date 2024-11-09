/* eslint-disable react/prop-types */
import { useState } from "react";
import "./styles.css";

const colors = [
  "Black",
  "Brown",
  "Red",
  "Orange",
  "Yellow",
  "Green",
  "Blue",
  "Violet",
  "Gray",
  "White",
];
const tolColors = ["none", "#cd7f32", "red", "gold", "silver"];
const multiplierValues = [
  1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000,
];
const colorValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const tolValues = [0, 1, 2, 5, 10];

function ResistorForm({ onResistorChange, getTolerance }) {
  const [band1, setBand1] = useState(0);
  const [band2, setBand2] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [tolerance, setTolerance] = useState(1);

  const handleChange = () => {
    const resistorValue =
      parseInt(band1.toString() + band2.toString()) *
      multiplierValues[multiplier];
    onResistorChange(resistorValue);
    tolerance > 0 ? getTolerance(resistorValue * (tolerance * 0.01)) : "";
  };

  const getBandValue = (color) => {
    return colorValues[colors.indexOf(color)];
  };

  const getBandName = (cant) => {
    return colors[colorValues.indexOf(cant)];
  };
  const getBandNameT = (cant) => {
    return tolColors[tolValues.indexOf(cant)];
  };

  const getBandNameM = (cant) => {
    return colors[multiplierValues.indexOf(cant)];
  };
  return (
    <div className="resistor-form">
      <h2>Selecciona los colores de las bandas</h2>
      <div className="resistor-bands">
        <div style={{ backgroundColor: getBandName(parseInt(band1)) }}>
          <h3>Banda 1</h3>
          <select
            onChange={(e) => {
              setBand1(e.target.value);
              handleChange();
            }}
          >
            {colors.map((color, index) => (
              <option value={getBandValue(color)} key={index}>
                {color}
              </option>
            ))}
          </select>
          <h4>Valor: {band1}</h4>
        </div>
        <div style={{ backgroundColor: getBandName(parseInt(band2)) }}>
          <h3>Banda 2</h3>
          <select
            onChange={(e) => {
              setBand2(e.target.value);
              handleChange();
            }}
          >
            {colors.map((color, index) => (
              <option value={getBandValue(color)} key={index}>
                {color}
              </option>
            ))}
          </select>
          <h4>Valor: {band2}</h4>
        </div>
        <div style={{ backgroundColor: getBandNameM(parseInt(multiplier)) }}>
          <h3>Multiplicador</h3>
          <select
            onChange={(e) => {
              setMultiplier(e.target.value);
              handleChange();
            }}
          >
            {colors.map((color, index) => (
              <option
                value={multiplierValues[colors.indexOf(color)]}
                key={index}
              >
                {color}
              </option>
            ))}
          </select>
          <h4>Valor: {multiplier}</h4>
        </div>
        <div style={{ backgroundColor: getBandNameT(parseInt(tolerance)) }}>
          <h3>Tolerance</h3>
          <select
            onChange={(e) => {
              setTolerance(e.target.value);
              //handleChange();
            }}
          >
            {tolColors.map((color, index) => (
              <option value={tolValues[tolColors.indexOf(color)]} key={index}>
                {color}
              </option>
            ))}
          </select>
          <h4>Valor: {tolerance} %</h4>
        </div>
      </div>
    </div>
  );
}

export default ResistorForm;
