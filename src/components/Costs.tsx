import "bootstrap/dist/js/bootstrap.bundle.min.js";

import{ useState } from "react";

interface Props {
  title: string;
  content: string;
  color: string;
}

const Costs = ({ color }: Props) => {
  const [trigger, setTrigger] = useState(0);

  // handles clicks
  const handleClick = () => {
    console.log(trigger);
    // Update the state to trigger a re-render
    setTrigger((prev) => prev + 1);
  };

  return (
    <div className="btn-group dropend" style={{ height: "15vh" }}>
      <button
        type="button"
        className="btn btn-secondary dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{ background: color, color: "#000000" }}
        onClick={handleClick}
      >
        {"Costs"}
      </button>
      <ul
        className="dropdown-menu p-4 text-body-secondary"
        style={{ minWidth: "300px" }}
      >
        {/* Displays when the button is pressed */}
        <li>
          <p>
            {"Cost to produce one piece of paper: " +
              (sessionStorage.getItem("Cost") ?? "10")}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Costs;
