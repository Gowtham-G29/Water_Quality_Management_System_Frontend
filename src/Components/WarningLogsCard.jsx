import { Card, CardContent, Typography, Box, Divider } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import SmsIcon from "@mui/icons-material/Sms";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import dayjs from "dayjs";

export default function WarningLogsCard({ warningLogs }) {
  console.log("WarningLogsCard received warningLogs:", warningLogs);

  if (!warningLogs || warningLogs.length === 0) {
    return (
      <div className="flex items-center justify-center w-full h-[30rem]">
        <Typography
          variant="h6"
          className="text-gray-500 text-center font-medium"
        >
          No warning logs available.
        </Typography>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-6 justify-center p-4">
      {warningLogs.map((logs) => {
        const formattedTime = logs.createdAt
          ? dayjs(logs.createdAt).format("MMM DD, YYYY - HH:mm")
          : "Unknown Time";

        return (
          <div key={logs.id}>
            <Card className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 w-80 md:w-96 overflow-hidden">
              {/* Header */}
              <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-5 py-3">
                <WarningAmberRoundedIcon />
                <Typography variant="h6" className="font-semibold tracking-wide">
                  Warning Log
                </Typography>
              </div>

              {/* Card Body */}
              <CardContent className="flex flex-col gap-3 p-5">
                {/* Readings Section */}
                <Box className="grid grid-cols-2 gap-y-2 text-sm text-gray-700">
                  <div>
                    <span className="font-semibold text-gray-800">pH:</span>{" "}
                    {logs.ph}
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800">TDS:</span>{" "}
                    {logs.tds} ppm
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800">Temp:</span>{" "}
                    {logs.temperature} °C
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800">
                      Turbidity:
                    </span>{" "}
                    {logs.turbidity} NTU
                  </div>
                </Box>

                {/* Time */}
                <Typography
                  variant="caption"
                  className="text-gray-500 mt-3 bg-gray-100 px-3 py-1 rounded-lg self-start"
                >
                  {formattedTime}
                </Typography>

                <Divider className="my-3" />

                {/* Status Section */}
                <Box className="flex justify-between items-center">
                  <Box className="flex items-center gap-2">
                    <div
                      className={`p-2 rounded-full ${
                        !logs.emergencyCall
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-500"
                      }`}
                    >
                      <CallIcon fontSize="small" />
                    </div>
                    <Typography
                      variant="body2"
                      className="text-gray-700 font-medium"
                    >
                      {!logs.emergencyCall ? "Call Sent" : "No Call"}
                    </Typography>
                  </Box>

                  <Box className="flex items-center gap-2">
                    <div
                      className={`p-2 rounded-full ${
                        !logs.smsSent
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-500"
                      }`}
                    >
                      <SmsIcon fontSize="small" />
                    </div>
                    <Typography
                      variant="body2"
                      className="text-gray-700 font-medium"
                    >
                      {!logs.smsSent ? "SMS Sent" : "No SMS"}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
