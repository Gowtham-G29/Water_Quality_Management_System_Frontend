import React, { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Paper,
} from "@mui/material";
import { createUser } from "../Api";

export default function LoginForm({ setProfilePageRefresh, setLoading }) {
  const [formData, setFormData] = useState({
    username: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let normalizedPhone = formData.phoneNumber.trim();
      if (!normalizedPhone.startsWith("91")) {
        normalizedPhone = "91" + normalizedPhone;
      }

      await createUser({
        ...formData,
        phoneNumber: normalizedPhone,
      });
      setLoading(false);
      setProfilePageRefresh((old) => old + 1);
    } catch (err) {
      setLoading(false);
      console.error("Failed to create user:", err);
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
        overflow: "hidden",
      }}
    >
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3, width: "100%" }}>
        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            margin="normal"
            required
          />

          <TextField
            fullWidth
            label="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            margin="normal"
            required
            type="tel"
            placeholder="+91 9876543210"
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3, py: 1.2, borderRadius: 2 }}
          >
            Login
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
