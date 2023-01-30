import React from "react";
import { Box, Button } from "@mui/material";
import { accessUrl } from "../config";

export default function Login() {
  return (
    <Box
      sx={{
        height: "100vh",
        bgcolor: "Background.paper",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button href={accessUrl} size="large" variant="contained">
        login to spotify
      </Button>
    </Box>
  );
}
