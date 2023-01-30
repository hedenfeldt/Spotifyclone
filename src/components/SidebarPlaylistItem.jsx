import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function SidebarPlaylistItem() {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <Box
        px={3}
        py={1}
        sx={{ color: "text.secondary", cursor: "pointer", fontSize: 14 }}
      >
        Trainspotters
      </Box>
    </Link>
  );
}
