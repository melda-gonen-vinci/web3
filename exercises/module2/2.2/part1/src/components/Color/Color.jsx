import { useState } from "react";
import './Color.css';

const colors = ["white","red", "green", "blue", "yellow", "purple"];

const Color = () => {
    const [colorIndex, setColorIndex] = useState(0);

  return (
    <div className="color-box"
        style={{ backgroundColor: colors[colorIndex] }}
    >    
        <button className="color-box_button" onClick={() => {   
            setColorIndex((colorIndex + 1) % colors.length)
        }}
        >
        </button>
        next color : {colors[(colorIndex + 1) % colors.length]}  
    </div>
  );
};

export default Color;