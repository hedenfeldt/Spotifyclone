import React from "react";
import { Box, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SidebarPlaylistItem from "./SidebarPlaylistItem";

export default function Sidebar() {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        width: 230,
        height: "100%",
        flexDirection: "column",
        display: { xs: "none", md: "flex" },
      }}
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        <Box
          px={3}
          py={1}
          sx={{
            color: "text.primary",
            fontWeight: "bold",
            fontSize: 14,
            display: "flex",
            alignItems: "center",
          }}
        >
          <HomeRoundedIcon sx={{ fontSize: 28, marginRight: 1 }} /> Home
        </Box>
      </Link>

      <Box px={3} py={1}>
        <Divider />
      </Box>

      <Box sx={{ flex: 1, overflowY: "auto" }}>
        <SidebarPlaylistItem />
        <SidebarPlaylistItem />
        <SidebarPlaylistItem />
        <SidebarPlaylistItem />
      </Box>
    </Box>
  );
}
