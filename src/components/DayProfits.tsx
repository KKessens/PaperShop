import "bootstrap/dist/css/bootstrap.min.css";
import "./DayProfits.css";

interface Props {
  trigger: number; // Prop to trigger re-render
}

// Displays information from each day of the week
const DayProfits = ({ trigger }: Props) => {
  console.log(trigger);
  const day = parseInt(sessionStorage.getItem("Day") ?? "0", 10); // Retrieve the current day from sessionStorage

  return (
    <>
      <div className="dayProfits">
        <div className="container text-center">
          <div className="row">
            {/* Displays Monday */}
            <div
              className="col"
              style={{
                backgroundColor: day === 1 ? "#40407a" : "#2c2c5b",
                width: "25vh",
                
              }}
            >
              <h1>Monday</h1>
              <hr style={{ border: "2px solid" }}></hr>
              <p>
                {"Revenue: " +
                  parseInt(sessionStorage.getItem("MRevenue") ?? "0", 10)}
              </p>
              <p>
                {"Cost: " +
                  parseInt(sessionStorage.getItem("MCost") ?? "0", 10)}
              </p>
              <p>
                {"Profit: " +
                  parseInt(sessionStorage.getItem("MProfit") ?? "0", 10)}
              </p>
              <p>
                {"Total Profit: " +
                  parseInt(sessionStorage.getItem("MTProfit") ?? "0", 10)}
              </p>
            </div>
            {/* Displays Tuesday */}
            <div
              className="col"
              style={{
                backgroundColor: day === 2 ? "#40407a" : "#2c2c5b",
                width: "25vh",
              }}
            >
              <h1>Tuesday</h1>
              <hr style={{ border: "2px solid" }}></hr>
              <p>
                {"Revenue: " +
                  parseInt(sessionStorage.getItem("TRevenue") ?? "0", 10)}
              </p>
              <p>
                {"Cost: " +
                  parseInt(sessionStorage.getItem("TCost") ?? "0", 10)}
              </p>
              <p>
                {"Profit: " +
                  parseInt(sessionStorage.getItem("TProfit") ?? "0", 10)}
              </p>
              <p>
                {"Total Profit: " +
                  parseInt(sessionStorage.getItem("TTProfit") ?? "0", 10)}
              </p>
            </div>
            {/* Displays Wednesday */}
            <div
              className="col"
              style={{
                backgroundColor: day === 3 ? "#40407a" : "#2c2c5b",
                width: "30vh",
              }}
            >
              <h1>Wednesday</h1>
              <hr style={{ border: "2px solid" }}></hr>
              <p>
                {"Revenue: " +
                  parseInt(sessionStorage.getItem("WRevenue") ?? "0", 10)}
              </p>
              <p>
                {"Cost: " +
                  parseInt(sessionStorage.getItem("WCost") ?? "0", 10)}
              </p>
              <p>
                {"Profit: " +
                  parseInt(sessionStorage.getItem("WProfit") ?? "0", 10)}
              </p>
              <p>
                {"Total Profit: " +
                  parseInt(sessionStorage.getItem("WTProfit") ?? "0", 10)}
              </p>
            </div>
            {/* Displays Thursday */}
            <div
              className="col"
              style={{
                backgroundColor: day === 4 ? "#40407a" : "#2c2c5b",
                width: "25vh",
              }}
            >
              <h1>Thursday</h1>
              <hr style={{ border: "2px solid" }}></hr>
              <p>
                {"Revenue: " +
                  parseInt(sessionStorage.getItem("ThRevenue") ?? "0", 10)}
              </p>
              <p>
                {"Cost: " +
                  parseInt(sessionStorage.getItem("ThCost") ?? "0", 10)}
              </p>
              <p>
                {"Profit: " +
                  parseInt(sessionStorage.getItem("ThProfit") ?? "0", 10)}
              </p>
              <p>
                {"Total Profit: " +
                  parseInt(sessionStorage.getItem("ThTProfit") ?? "0", 10)}
              </p>
            </div>
            {/* Displays Friday */}
            <div
              className="col"
              style={{
                backgroundColor: day === 5 ? "#40407a" : "#2c2c5b",
                width: "22vh",
              }}
            >
              <h1>Friday</h1>
              <hr style={{ border: "2px solid" }}></hr>
              <p>
                {"Revenue: " +
                  parseInt(sessionStorage.getItem("FRevenue") ?? "0", 10)}
              </p>
              <p>
                {"Cost: " +
                  parseInt(sessionStorage.getItem("FCost") ?? "0", 10)}
              </p>
              <p>
                {"Profit: " +
                  parseInt(sessionStorage.getItem("FProfit") ?? "0", 10)}
              </p>
              <p>
                {"Total Profit: " +
                  parseInt(sessionStorage.getItem("FTProfit") ?? "0", 10)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DayProfits;
