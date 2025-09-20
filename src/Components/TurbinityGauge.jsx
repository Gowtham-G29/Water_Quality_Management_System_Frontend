import { Gauge } from "@mui/x-charts/Gauge";

function TurbidityGauge() {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-sm">
        <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
          Turbidity
        </h2>

        <Gauge
          value={12}
          valueMin={0}
          valueMax={100}
          startAngle={-110}
          endAngle={110}
          sx={{
            ["& .MuiGauge-valueText"]: {
              fontSize: 28,
              fontWeight: "bold",
              fill: "#2563eb", // Tailwind blue-600 for turbidity
            },
          }}
          text={({ value }) => `${value} NTU`}
        />

        <p className="text-center mt-4 text-sm text-gray-600">
          Ideal: &lt; 5 NTU
        </p>
      </div>
    </div>
  );
}

export default TurbidityGauge;
