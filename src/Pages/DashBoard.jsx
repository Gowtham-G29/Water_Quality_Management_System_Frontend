import { useEffect, useState } from "react";
import PHGauge from "../Components/PHGauge";
import TDSGauge from "../Components/TDSGauge";
import TemparatureGauge from "../Components/TemparatureGauge";
import TurbinityGauge from "../Components/TurbinityGauge";
import axios from "axios";

function DashBoard() {
  const [sensorData, setSensorData] = useState({
    ph: 0,
    temperature: 0,
    tds: 0,
    turbidity: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/sensor/latest");
        setSensorData(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 1000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 flex-grow">
        <PHGauge value={sensorData.ph} />
        <TemparatureGauge value={sensorData.temperature} />
        <TDSGauge value={sensorData.tds} />
        <TurbinityGauge value={sensorData.turbidity} />
      </div>
    </div>
  );
}

export default DashBoard;
