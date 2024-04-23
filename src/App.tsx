import { useEffect, useState } from "react";
import "./App.css";
import { generateRandomColors } from "./utils/colorGenrator";

// ! Tailwind has a problem with constuction classNames partially

interface result {
  message: "Sucess" | "Failer";
}
function App({ size }: { size: number }) {
  const [colors, setColors] = useState(generateRandomColors(size));
  const [displayedColor, setDisplayedColor] = useState("");
  const [resultText, setResultText] = useState<result>();

  function handleClick(color: String): void {
    if (color === displayedColor) {
      setColors(generateRandomColors(size));
      setResultText({
        message: "Sucess",
      });
    } else {
      setResultText({
        message: "Failer",
      });
    }
  }

  useEffect(() => {
    setDisplayedColor(colors[Math.floor(Math.random() * colors.length)]);
  }, [colors]);

  return (
    <div className="flex flex-col gap-y-8 h-full items-center">
      <div
        className={`max-w-6xl w-full h-60  ${displayedColor} rounded-2xl`}
      ></div>
      <div
        className={`flex gap-8 flex-wrap border-2 ${
          resultText?.message === "Sucess"
            ? "border-green-500"
            : "border-red-500"
        } rounded-2xl justify-center p-8`}
      >
        {colors.map((color, index) => (
          <button
            key={index}
            onClick={() => handleClick(color)}
            className={`${color} p-2 rounded-xl text-xl cursor-pointer hover:opacity-75 transition-all w-36 border-2`}
          >
            {color}
          </button>
        ))}
      </div>
      <h2
        className={`text-3xl ${
          resultText?.message === "Sucess" ? "text-green-500" : "text-red-500"
        }`}
      >
        {resultText?.message}
      </h2>
    </div>
  );
}

export default App;
