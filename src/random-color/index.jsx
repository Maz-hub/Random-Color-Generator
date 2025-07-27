import { useState } from "react";
import "./styles.css";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[Math.floor(Math.random() * hex.length)];
    }
    //console.log(hexColor);
    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    setColor(`rgb(${r},${g},${b})`);
  }

  return (
    <div style={{ width: "100vw", height: "100vh", background: color }}>
      <div className="buttons">
        <button onClick={() => setTypeOfColor("hex")} className="btn">
          HEX Color
        </button>
        <button onClick={() => setTypeOfColor("rgb")} className="btn">
          RGB Color
        </button>
        <button
          onClick={
            typeOfColor === "hex"
              ? handleCreateRandomHexColor
              : handleCreateRandomRgbColor
          }
          className="btn"
        >
          Generate Random Color
        </button>
      </div>
      <div className="showColor">
        <h1> {typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h1>
        <h2>{color}</h2>
      </div>
    </div>
  );
}
