import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { getNews } from "./functions/news";
import { useState } from "react";

interface Props {
  title: string;
  color: string;
}

const News = ({ title, color }: Props) => {
  const [trigger, setTrigger] = useState(0);
  

  const handleClick = () => {
    // Update the state to trigger a re-render
    setTrigger((prev) => prev + 1);
  };

  return (
    <div className="btn-group dropend" style={{ height: "14vh" }}>
      <button
        type="button"
        className="btn btn-secondary dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{ background: color, color: "#000000" }}
        onClick={handleClick}
      >
        {title}
      </button>
      <ul
        className="dropdown-menu p-4 text-body-secondary"
        style={{ minWidth: "300px" }}
      >
        <li>
          <p>
            {/* Retrieves the news */}
            {getNews(parseInt(sessionStorage.getItem("randomNum") ?? "0", 10))}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default News;
