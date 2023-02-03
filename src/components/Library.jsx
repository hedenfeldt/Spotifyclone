import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import LibraryCard from "./LibraryCard";

export default function Library() {
  const { albumList } = useSelector((state) => state.playlist);

  return (
    <Box
      p={3}
      sx={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        overflowY: "auto",
      }}
    >
      <Typography
        sx={{ color: "text.primary", fontSize: 30, fontWeight: "bold" }}
      >
        ditt bibliotek
      </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {albumList.map((album, i) => (
          <LibraryCard album={album} />
        ))}
      </Grid>
    </Box>
  );
}
