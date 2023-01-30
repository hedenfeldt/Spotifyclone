import React from "react";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 5,
      }}
    >
      <Button size="large" variant="contained">
        hej spotify
      </Button>
    </Box>
  );
}
