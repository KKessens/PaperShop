import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState } from "react";

interface Props {
  color: string;
}

// Get the quantity demanded
export const getQuantDemand = () => {
  // variables for demand equation
  let b = parseInt(sessionStorage.getItem("intercept") ?? "100", 10); // intercept
  let p = parseInt(sessionStorage.getItem("Price") ?? "10", 10);
  let m = parseInt(sessionStorage.getItem("slope") ?? "1", 10);

  let quantDemand = (b - p) / m;

  // doesn't make sense to have a quantity demanded below 0, so set to 0
  if (quantDemand < 0) {
    quantDemand = 0;
  }

  sessionStorage.setItem("Quantity Demanded", quantDemand.toString());
  return quantDemand;
};

// potential revenue that could be earned
export const getPotentialRevenue = () => {
  let revenue =
    getQuantDemand() * parseInt(sessionStorage.getItem("Price") ?? "10", 10);
  return revenue;
};

// get the actual revenue that is earned
export const getActualRevenue = () => {
  let amountProduced = parseInt(
    sessionStorage.getItem("Production") ?? "10",
    10
  );
  let quantDemanded = getQuantDemand();

  if (amountProduced > quantDemanded) {
    return getPotentialRevenue();
  } else {
    return (
      parseInt(sessionStorage.getItem("Production") ?? "10", 10) *
      parseInt(sessionStorage.getItem("Price") ?? "10", 10)
    );
  }
};

const QDemanded = ({ color }: Props) => {
  const [trigger, setTrigger] = useState(0);
  console.log(trigger)

  const handleClick = () => {
    // Update the state to trigger a re-render
    setTrigger((prev) => prev + 1);
  };

  return (
    <div className="btn-group dropend" style={{ height: "14vh" }}>
      {/* Button */}
      <button
        type="button"
        className="btn btn-secondary dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{ background: color, color: "#000000" }}
        onClick={handleClick}
      >
        {"Quantity Demanded"}
      </button>
      {/* Info displayed when the button is pressed */}
      <ul
        className="dropdown-menu p-4 text-body-secondary"
        style={{ minWidth: "300px" }}
      >
        <li>
          <p>
            {"Quantity Demanded at $" +
              parseInt(sessionStorage.getItem("Price") ?? "10", 10) +
              ": " +
              getQuantDemand()}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default QDemanded;
