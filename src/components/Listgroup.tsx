import News from "./News";
import "./Listgroup.css";
import NextDay from "./NextDay";
import Price from "./Price";
import Production from "./Production";
import Costs from "./Costs";
import QDemanded from "./QDemanded";

interface Props {
  onNextDayClick: () => void; // handle NextDay click
}

// Contains buttons on left side
const Listgroup = ({ onNextDayClick }: Props) => {
  return (
    <div className="listgroup">
      <div className="list-group">
        <News title="News" color="#ADD8E6" />
        <Price color="#ADD8E6" />
        <Production color="#ADD8E6" />
        <Costs title="Costs" content="test" color="#ADD8E6" />
        <QDemanded color="#ADD8E6" />
        <NextDay
          title="Next Day"
          color="#FF7F7F"
          onNextDayClick={onNextDayClick}
        />
      </div>
    </div>
  );
};

export default Listgroup;
