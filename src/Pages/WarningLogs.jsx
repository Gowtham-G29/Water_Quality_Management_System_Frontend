import WarningLogsCard from "../Components/WarningLogsCard";

function WarningLogs() {
  return (
    <div className="p-4 flex flex-col items-center sm:items-start gap-4 md:flex-row md:flex-wrap md:justify-start">
      {/* Example: multiple logs */}
      <WarningLogsCard />
      <WarningLogsCard />
      <WarningLogsCard />
      <WarningLogsCard />
    </div>
  );
}

export default WarningLogs;
