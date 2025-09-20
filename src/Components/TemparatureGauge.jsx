import { Gauge } from "@mui/x-charts";

function TemperatureGauge() {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-sm">
        <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
          Temperature
        </h2>

        <Gauge
          value={27}
          valueMin={0}
          valueMax={50}
          startAngle={-110}
          endAngle={110}
          sx={{
            ["& .MuiGauge-valueText"]: {
              fontSize: 28,
              fontWeight: "bold",
              fill: "#dc2626", // Tailwind red-600 for temp
            },
          }}
          text={({ value }) => `${value} °C`}
        />

        <p className="text-center mt-4 text-sm text-gray-600">
          Ideal range: 20 – 30 °C
        </p>
      </div>
    </div>
  );
}

export default TemperatureGauge;
