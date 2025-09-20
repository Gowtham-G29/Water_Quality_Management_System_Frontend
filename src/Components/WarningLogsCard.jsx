import { Card, CardContent, Typography, Box, Divider } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import SmsIcon from '@mui/icons-material/Sms';
import dayjs from 'dayjs'; // For formatting timestamp

export default function WarningLogsCard({ log }) {
  const exampleLog = log || {
    ph: 7.2,
    tds: 350,
    temperature: 28,
    turbidity: 12,
    timestamp: '2025-09-20 14:00',
    emergencyCall: true,
    smsSent: true,
  };

  // Format timestamp nicely
  const formattedTime = dayjs(exampleLog.timestamp).format('MMM DD, YYYY - HH:mm');

  return (
    <Card className="bg-white border rounded-2xl shadow-xl w-80 md:w-96 hover:shadow-2xl transition-shadow duration-300">
      <CardContent className="flex flex-col gap-2 p-5">
        {/* Title */}
        <Typography variant="h6" className="font-semibold text-gray-800">
          Warning Log
        </Typography>

        {/* Readings */}
        <Box className="flex justify-between text-sm text-gray-700 mt-1">
          <div>pH: {exampleLog.ph}</div>
          <div>TDS: {exampleLog.tds} ppm</div>
        </Box>
        <Box className="flex justify-between text-sm text-gray-700">
          <div>Temp: {exampleLog.temperature} °C</div>
          <div>Turbidity: {exampleLog.turbidity} NTU</div>
        </Box>

        <Typography
          variant="caption"
          className="text-gray-500 mt-2 bg-gray-50 px-2 py-1 rounded-md self-start"
        >
          {formattedTime}
        </Typography>

        <Divider className="my-3" />

        <Box className="flex justify-between items-center">
          <Box className="flex items-center gap-2">
            <CallIcon
              fontSize="small"
              className={exampleLog.emergencyCall ? 'text-red-500' : 'text-gray-300'}
            />
            <Typography variant="caption" className="text-gray-700">
              {exampleLog.emergencyCall ? 'Call Sent' : 'No Call'}
            </Typography>
          </Box>
          <Box className="flex items-center gap-2">
            <SmsIcon
              fontSize="small"
              className={exampleLog.smsSent ? 'text-green-500' : 'text-gray-300'}
            />
            <Typography variant="caption" className="text-gray-700">
              {exampleLog.smsSent ? 'SMS Sent' : 'No SMS'}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
