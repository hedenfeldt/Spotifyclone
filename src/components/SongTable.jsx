import { Box, Divider, Grid } from "@mui/material";
import React from "react";
import { AccessTimeRounded } from "@mui/icons-material";
import { width } from "@mui/system";
import SongRow from "./SongRow";

export default function SongTable({ songs, isLoading, spotifyApi }) {
  return (
    <Box sx={{ xs: 3, md: 4 }}>
      <Divider />

      <Grid
        container
        px={2}
        py={1}
        sx={{ width: "100%", color: "text.secondary", fontSize: 14 }}
      >
        <Grid item sx={{ width: 35 }}>
          #
        </Grid>

        <Grid item sx={{ flex: 1 }}>
          Title
        </Grid>

        <Grid item xs={3} sx={{ display: { xs: "none", md: "flex" } }}>
          Album
        </Grid>

        <Grid item xs={3} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <AccessTimeRounded sx={{ width: 20, height: 20 }} />
        </Grid>
      </Grid>
      {isLoading
        ? Array(20)
            .fill(0)
            .map((_, index) => <SongRow isLoading index={index} />)
        : songs?.map((song, index) => (
            <SongRow song={song.track} index={index} spotifyApi={spotifyApi} />
          ))}
    </Box>
  );
}
