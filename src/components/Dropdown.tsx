import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Dropdown.css";

// Displays the rules when "Rules" button is pressed
const Dropdown = () => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-info dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Rules
      </button>
      <div
        className="dropdown-menu p-4 text-body-secondary"
        style={{ minWidth: "300px" }}
      >
        <h3>Welcome to the paper shop!</h3>
        <p>
          Maximize profit by following the laws of supply and demand. Change the
          price of paper and the amount of paper produced. Be sure to check the
          news as nothing stays the same way for long!
        </p>
      </div>
    </div>
  );
};

export default Dropdown;
