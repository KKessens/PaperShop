import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { getActualRevenue } from "./QDemanded";

interface Props {
  title: string;
  color: string;
  onNextDayClick: () => void; // Add onClick prop to handle state update
}

// updates cost and values of each day of the week
const updateCost = (ranNum: Number) => {
  let ranNumN = ranNum.valueOf();
  let change = Math.floor(Math.random() * 3) + 1;
  let cost = parseInt(sessionStorage.getItem("Cost") ?? "10", 10);

  if (ranNumN > 0 && ranNumN < 6) {
    cost += change;
  } else if (ranNumN > 5 && ranNumN < 11) {
    cost -= change;
  }

  let day = parseInt(sessionStorage.getItem("Day") ?? "0", 10);
  if (day == 1) {
    let totalCost =
      cost * parseInt(sessionStorage.getItem("Production") ?? "100", 10);
    let revenue = getActualRevenue();
    let profit = revenue - totalCost;
    sessionStorage.setItem("MCost", totalCost.toString());
    sessionStorage.setItem("MRevenue", revenue.toString());
    sessionStorage.setItem("MProfit", profit.toString());
    sessionStorage.setItem("MTProfit", profit.toString());
  } else if (day == 2) {
    let totalCost =
      cost * parseInt(sessionStorage.getItem("Production") ?? "100", 10);
    let revenue = getActualRevenue();
    let profit = revenue - totalCost;
    let totalProfit =
      parseInt(sessionStorage.getItem("MProfit") ?? "0", 10) + profit;
    sessionStorage.setItem("TCost", totalCost.toString());
    sessionStorage.setItem("TRevenue", revenue.toString());
    sessionStorage.setItem("TProfit", profit.toString());
    sessionStorage.setItem("TTProfit", totalProfit.toString());
  } else if (day == 3) {
    let totalCost =
      cost * parseInt(sessionStorage.getItem("Production") ?? "100", 10);
    let revenue = getActualRevenue();
    let profit = revenue - totalCost;
    let totalProfit =
      parseInt(sessionStorage.getItem("TTProfit") ?? "0", 10) + profit;
    sessionStorage.setItem("WCost", totalCost.toString());
    sessionStorage.setItem("WRevenue", revenue.toString());
    sessionStorage.setItem("WProfit", profit.toString());
    sessionStorage.setItem("WTProfit", totalProfit.toString());
  } else if (day == 4) {
    let totalCost =
      cost * parseInt(sessionStorage.getItem("Production") ?? "100", 10);
    let revenue = getActualRevenue();
    let profit = revenue - totalCost;
    let totalProfit =
      parseInt(sessionStorage.getItem("WTProfit") ?? "0", 10) + profit;
    sessionStorage.setItem("ThCost", totalCost.toString());
    sessionStorage.setItem("ThRevenue", revenue.toString());
    sessionStorage.setItem("ThProfit", profit.toString());
    sessionStorage.setItem("ThTProfit", totalProfit.toString());
  } else if (day == 5) {
    let totalCost =
      cost * parseInt(sessionStorage.getItem("Production") ?? "100", 10);
    let revenue = getActualRevenue();
    let profit = revenue - totalCost;
    let totalProfit =
      parseInt(sessionStorage.getItem("ThTProfit") ?? "0", 10) + profit;
    sessionStorage.setItem("FCost", totalCost.toString());
    sessionStorage.setItem("FRevenue", revenue.toString());
    sessionStorage.setItem("FProfit", profit.toString());
    sessionStorage.setItem("FTProfit", totalProfit.toString());
  }

  sessionStorage.setItem("Cost", cost.toString());
};

// updates random number
const updateRandom = () => {
  sessionStorage.setItem(
    "randomNum",
    Math.floor(Math.random() * 21).toString()
  );
};

// updates the demand variables
const updateDemandVars = (ranNum: Number) => {
  let ranNumN = ranNum.valueOf();
  let slope = parseInt(sessionStorage.getItem("slope") ?? "1", 10);
  let intercept = parseInt(sessionStorage.getItem("intercept") ?? "100", 10);

  let interceptChange = Math.floor(Math.random() * 50) + 1;

  // demand increases
  if (ranNumN > 10 && ranNumN < 16) {
    intercept += interceptChange;
  }
  // demand decreases
  else if (ranNumN > 15 && ranNumN < 21) {
    intercept -= interceptChange;
  }

  // update slope and intercept
  sessionStorage.setItem("slope", slope.toString());
  sessionStorage.setItem("intercept", intercept.toString());
};

// runs when nextDay button is pressed
const updateOnClick = (onNextDayClick: () => void) => {
  // updates data through methods above
  updateRandom();
  updateCost(parseInt(sessionStorage.getItem("randomNum") ?? "0", 10));
  updateDemandVars(parseInt(sessionStorage.getItem("randomNum") ?? "0", 10));

  let day = parseInt(sessionStorage.getItem("Day") ?? "0", 10);
  day += 1;
  sessionStorage.setItem("Day", day.toString());

  onNextDayClick(); // Trigger re-render in App component
};

const NextDay = ({ title, color, onNextDayClick }: Props) => {
  // info for next day button
  return (
    <div className="btn-group dropend" style={{ height: "14vh" }}>
      <button
        type="button"
        className="btn btn-secondary dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{ background: color, color: "#000000" }}
        onClick={() => updateOnClick(onNextDayClick)} // Pass onNextDayClick to updateOnClick
      >
        {title}
      </button>
    </div>
  );
};

export default NextDay;
