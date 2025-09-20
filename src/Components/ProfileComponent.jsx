import { Card, CardContent, Typography, Box, Avatar, Button } from "@mui/material";

export default function ProfileComponent({ user, onLogout }) {
  // Example user if no props passed
  const exampleUser = user || {
    name: "John Doe",
    phone: "+91 9876543210",
    avatar: "", // optional avatar URL
  };

  return (
    <Box className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <Card className="w-full max-w-sm rounded-2xl shadow-xl">
        <CardContent className="flex flex-col items-center gap-6 p-6">
          {/* Avatar */}
          <Avatar
            src={exampleUser.avatar}
            alt={exampleUser.name}
            sx={{ width: 80, height: 80 }}
          />

          {/* Name */}
          <Typography variant="h6" className="font-semibold text-gray-800">
            {exampleUser.name}
          </Typography>

          {/* Phone */}
          <Typography variant="body1" className="text-gray-600">
            Phone: {exampleUser.phone}
          </Typography>

          {/* Logout Button */}
          <Button
            variant="contained"
            color="primary"
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
