import { Gauge } from "@mui/x-charts";

function PHGauge({value}) {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-sm">
        <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
          pH Level
        </h2>

        <Gauge
          value={value||0}
          valueMin={0}
          valueMax={14}
          startAngle={-110}
          endAngle={110}
          sx={{
            ["& .MuiGauge-valueText"]: {
              fontSize: 28,
              fontWeight: "bold",
              fill: "#16a34a", // Tailwind green-600
            },
          }}
          text={({ value }) => `pH ${value}`}
        />

        <p className="text-center mt-4 text-sm text-gray-600">
          Ideal range: 6.5 – 8.5
        </p>
      </div>
    </div>
  );
}

export default PHGauge;
