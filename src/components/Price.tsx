import "bootstrap/dist/js/bootstrap.bundle.min.js";

import React, { useState } from "react";

interface Props {
  color: string;
}

const Price = ({ color }: Props) => {
  const [trigger, setTrigger] = useState(0);
  

  const handleClick = () => {
    // Update the state to trigger a re-render
    setTrigger((prev) => prev + 1);
  };

  // State to hold the current value of the slider
  const [sliderValue, setSliderValue] = useState<number>(10);

  // Handler for when the slider value changes
  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(event.target.value));
    sessionStorage.setItem("Price", Number(event.target.value).toString());
  };

  return (
    <div className="btn-group dropend" style={{ height: "14vh" }}>
      {/* Dropdown button */}
      <button
        type="button"
        className="btn btn-secondary dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{ background: color, color: "#000000" }}
        onClick={handleClick}
      >
        {"Price"}
      </button>
      {/* Info displayed once button is pressed */}
      <ul
        className="dropdown-menu p-4 text-body-secondary"
        style={{ minWidth: "300px" }}
      >
        <li>
          <p>
            {"Set the price charged per paper"}
            {/* Slider */}
            <input
              type="range"
              className="form-range"
              id="customRange1"
              min="1"
              max="200"
              value={sliderValue}
              onChange={handleSliderChange}
            />
            <p>
              Price: <span>{sliderValue}</span>
            </p>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Price;
