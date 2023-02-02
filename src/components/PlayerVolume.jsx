import { VolumeDown, VolumeUp, VolumeOff } from "@mui/icons-material";
import { Grid, Slider } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import Player from "./Player";

export default function PlayerVolume({ player }) {
  const [volume, setVolume] = useState(50);
  return (
    <Grid
      item
      xs={3}
      sx={{
        display: { xs: "none", md: "flex" },
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <Stack
        spacing={2}
        alignItems="center"
        direction="row"
        sx={{ width: 150, color: "text.secondary" }}
      >
        {volume === 0 ? (
          <VolumeOff />
        ) : volume <= 50 ? (
          <VolumeDown />
        ) : (
          <VolumeUp />
        )}

        <Slider
          min={0}
          max={100}
          value={volume}
          onChange={(_, v) => setVolume(v)}
          onChangeCommitted={(_, v) => {
            player.setVolume(v / 100);
          }}
          step={1}
        />
      </Stack>
    </Grid>
  );
}
