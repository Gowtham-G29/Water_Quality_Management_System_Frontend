import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  Button,
  Switch,
} from "@mui/material";
import { useEffect, useState } from "react";
import { logoutUser, updateAlertStatus } from "../Api";

export default function ProfileComponent({
  user,
  setProfilePageRefresh,
  setLoading,
}) {
  const [checked, setChecked] = useState(user?.alertState ?? false);

  const handleChange = (event) => {
    const newChecked = event.target.checked;
    setChecked(newChecked);
    changeAlertStatus(newChecked);
  };

  const changeAlertStatus = async (newChecked) => {
    setLoading(true);

    try {
      await updateAlertStatus(user.phoneNumber, newChecked);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.error("Failed to update alert status:", err);
    }
  };
  const onLogout = async () => {
     setLoading(true);
    try {
      await logoutUser(user.phoneNumber);
      setLoading(false);
      setProfilePageRefresh((old) => old + 1);
    } catch (error) {
      setLoading(false);
      console.error("Logout failed:", error);
    }
  };

  useEffect(() => {
    if (user?.alertState !== undefined) {
      setChecked(user.alertState);
    }
  }, [user?.alertState]);

  return (
    <Box className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <Card className="w-full max-w-sm rounded-2xl shadow-xl">
        <CardContent className="flex flex-col items-center gap-6 p-6">
          <Avatar sx={{ width: 80, height: 80, bgcolor: "primary.main" }}>
            {user?.username?.[0]?.toUpperCase()}
          </Avatar>

          <Typography variant="h6" className="font-semibold text-gray-800">
            {user.username.substring(0, 20)}
          </Typography>

          <Typography variant="body1" className="text-gray-600">
            Phone No: {user.phoneNumber.substring(2)}
          </Typography>

          <Box display="flex" alignItems="center" gap={1}>
            <Typography>
              {checked ? "Warning Alerts ON" : "Warning Alerts OFF"}
            </Typography>
            <Switch checked={checked} onChange={handleChange} />
          </Box>

          <Button
            variant="contained"
            color="error"
            className="mt-4 w-full"
            onClick={onLogout}
          >
            Logout
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
