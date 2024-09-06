import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS

interface EndProps {
  trigger: number; // Define the prop type
}

const End: React.FC<EndProps> = ({ trigger }) => {
  const updateHighScore = () => {
    let currScore = parseInt(
      sessionStorage.getItem("FTProfit") ?? "-1000000",
      10
    );
    let highscore = parseInt(
      localStorage.getItem("highscore") ?? currScore.toString(),
      10
    );

    if (currScore > highscore) {
      highscore = currScore;
    }

    localStorage.setItem("highscore", highscore.toString());

    return highscore;
  };

  useEffect(() => {
    const day = parseInt(sessionStorage.getItem("Day") ?? "0", 10);

    if (day > 5) {
      // Use Bootstrap's Modal via direct import
      const modalElement = document.getElementById("staticBackdrop");
      if (modalElement) {
        import("bootstrap").then(({ Modal }) => {
          const modal = new Modal(modalElement);
          modal.show();
        });
      }
    }
  }, [trigger]); // Re-run this effect every time the trigger changes

  const onNextWeekClick = () => {
    sessionStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content" style={{ backgroundColor: "#CCCCCC" }}>
            <div
              className="modal-header"
              style={{
                display: "flex",
                justifyContent: "center", // Center the content horizontally
              }}
            >
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                End of the week!
              </h1>
            </div>

            <div className="modal-body">
              <p style={{ display: "flex", justifyContent: "center" }}>
                {"Final profit: " +
                  parseInt(sessionStorage.getItem("FTProfit") ?? "0", 10)}
              </p>
              <p style={{ display: "flex", justifyContent: "center" }}>
                {"Highscore: " + updateHighScore()}
              </p>
            </div>

            <div
              className="modal-footer"
              style={{
                display: "flex",
                justifyContent: "center", // Center the button horizontally
              }}
            >
              <button
                onClick={onNextWeekClick}
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                New Week
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default End;
