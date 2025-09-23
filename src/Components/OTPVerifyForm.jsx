import React, { useState, useRef } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { verifyOTP } from "../Api";

export default function OtpVerification({
  phoneNumber,
  setProfilePageRefresh,
  setLoading,
}) {
  const [otp, setOtp] = useState(Array(4).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/, "");
    if (!value) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = async () => {
    const enteredOtp = otp.join("");
    setLoading(true);

    try {
      await verifyOTP(phoneNumber, enteredOtp);
      setLoading(false);
      setProfilePageRefresh((old) => old + 1);
    } catch (err) {
        setLoading(false);
      return err;
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          width: "100%",
          maxWidth: 360,
        }}
      >
        <Typography variant="h6">Enter the 4-digit OTP</Typography>

        <Box display="flex" gap={1.5}>
          {otp.map((digit, index) => (
            <TextField
              key={index}
              inputRef={(el) => (inputRefs.current[index] = el)}
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              inputProps={{
                maxLength: 1,
                style: { textAlign: "center", fontSize: "1.5rem" },
              }}
              sx={{ width: 56, height: 56 }}
            />
          ))}
        </Box>

        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={otp.join("").length !== 4}
          sx={{ mt: 1.5, borderRadius: 2, px: 4 }}
        >
          Verify OTP
        </Button>
      </Paper>
    </Box>
  );
}
