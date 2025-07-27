import { useState } from "react";
import "./styles.css";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  return (
    <div style={{ width: "100vw", height: "100vh", background: color }}>
      <div className="buttons">
        <button className="btn">Create HEX Color</button>
        <button className="btn">Create RGB Color</button>
        <button className="btn">Generate Random Color</button>
      </div>
    </div>
  );
}
