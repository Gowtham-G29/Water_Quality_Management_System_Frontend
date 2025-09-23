import { Box } from "@mui/material";
import OpacityIcon from "@mui/icons-material/Opacity";
import { keyframes } from "@emotion/react";

// Rotation animation
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export default function Loader() {
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width="100%"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      zIndex={9999}
      bgcolor="rgba(255,255,255,0.6)" // overlay
    >
      <Box
        sx={{
          position: "relative",
          width: 100,
          height: 100,
          animation: `${spin} 1.5s linear infinite`,
        }}
      >
        {[0, 1, 2].map((i) => (
          <Box
            key={i}
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: `rotate(${i * 120}deg) translate(40px) rotate(-${i * 120}deg)`,
            }}
          >
            <OpacityIcon
              sx={{
                fontSize: 321421,
                color: "#3b82f6",
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
