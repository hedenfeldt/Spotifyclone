import { IconButton, Slider, Stack, Typography } from "@mui/material";
import React from "react";
import { SkipPrevious, SkipNext, PlayArrow } from "@mui/icons-material";

export default function PlayerController({
  player,
  is_paused,
  duration,
  progress,
}) {
  return (
    <Stack
      spacing={0}
      justifyContent="center"
      alignItems="center"
      sx={{ width: "100%" }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ width: "75%" }}
      >
        <IconButton
          size="small"
          sx={{ color: "text.primary" }}
          onClick={() => {
            player.previousTrack();
          }}
        >
          <SkipPrevious sx={{ width: 28, height: 28 }} />
        </IconButton>
        <IconButton
          size="small"
          sx={{ color: "text.primary" }}
          onClick={() => {
            player.togglePlay();
          }}
        >
          <PlayArrow sx={{ width: 28, height: 28 }} />
        </IconButton>
        <IconButton
          size="small"
          sx={{ color: "text.primary" }}
          onClick={() => {
            player.SkipNext();
          }}
        >
          <SkipNext sx={{ width: 28, height: 28 }} />
        </IconButton>
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ width: "75%" }}
      >
        <Typography
          variant="body"
          sx={{ color: "text.secondary", fontSize: 12 }}
        >
          1:23
        </Typography>
        <Slider size="medium" />
        <Typography
          variant="body1"
          sx={{ color: "text.secondary", fontSize: 12 }}
        >
          1:23
        </Typography>
      </Stack>
    </Stack>
  );
}
