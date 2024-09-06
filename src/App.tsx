import { useState } from "react";
import Navbar from "./components/Navbar";
import Listgroup from "./components/Listgroup";
import DayProfits from "./components/DayProfits";
import End from "./End";
import "./App.css";

function App() {
  const [trigger, setTrigger] = useState(0); // State to trigger re-render

  const handleNextDayClick = () => {
    setTrigger(trigger + 1); // Increment the trigger to force re-render
  };

  return (
    <div className="main-class">
      <Navbar />

      <div className="content-wrapper">
        <Listgroup onNextDayClick={handleNextDayClick} />{" "}
        {/* Pass the handler to Listgroup */}
        <DayProfits trigger={trigger} /> {/* Pass the trigger to DayProfits */}
        <End trigger={trigger} /> {/* Pass the trigger to End */}
      </div>
    </div>
  );
}

export default App;
