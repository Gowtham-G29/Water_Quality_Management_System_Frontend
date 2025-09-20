import PHGauge from "../Components/PHGauge";
import TDSGauge from "../Components/TDSGauge";
import TemparatureGauge from "../Components/TemparatureGauge";
import TurbinityGauge from "../Components/TurbinityGauge";


function DashBoard() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 flex-grow">
        <PHGauge/>
        <TemparatureGauge />
        <TDSGauge />
        <TurbinityGauge />
      </div>
    </div>
  );
}

export default DashBoard;
