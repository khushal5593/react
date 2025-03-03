import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Pages/Homa";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <div
        className="container"
        style={{
          height: "900px",
          width: "1500px",
          border: "1px solid black",
          backgroundColor: darkMode ? "black" : "white",
          color: darkMode ? "white" : "black", 
        }}
      >
        <p></p>
      </div>
      <button
        onClick={() => {
          setDarkMode(!darkMode);
        }}
      >
        darkmode
      </button>
      <Home/>
    </>
  );
}

export default App;