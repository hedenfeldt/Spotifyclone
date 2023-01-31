import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { height } from "@mui/system";
import SongTable from "../components/SongTable";

export default function Playlist() {
  return (
    <Box sx={{ bgcolor: "Background.paper", flex: 1, overflowY: "auto" }}>
      <Box
        p={{ xs: 3, md: 4 }}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 3,
          boxSizing: "border-box",
        }}
      >
        <Avatar
          variant="square"
          src="https://i.scdn.co/image/ab6761610000e5ebaf34798a1e63c949afb78b49"
          sx={{
            boxShadow: 15,
            width: { sx: "100%", md: 235 },
            height: { sx: "100%", md: 235 },
          }}
        />
        <Box>
          <Typography
            sx={{ fontSize: 18, fontWeight: "bold", color: "text.primary" }}
          >
            Playlist
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 42, md: 72 },
              fontWeight: "bold",
              color: "text.primary",
            }}
          >
            Dirty north
          </Typography>
        </Box>
      </Box>
      <SongTable />
    </Box>
  );
}
