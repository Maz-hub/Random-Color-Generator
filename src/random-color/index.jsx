import { useState } from "react";
import "./styles.css";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function handleCreateRandomHexColor() {}

  function handleCreateRandomRgbColor() {}

  return (
    <div style={{ width: "100vw", height: "100vh", background: color }}>
      <div className="buttons">
        <button onClick={() => setTypeOfColor("hex")} className="btn">
          Create HEX Color
        </button>
        <button onClick={() => setTypeOfColor("rgb")} className="btn">
          Create RGB Color
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
    </div>
  );
}
