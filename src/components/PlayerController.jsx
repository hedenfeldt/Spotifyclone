import { IconButton, Slider, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { SkipPrevious, SkipNext, PlayArrow, Pause } from "@mui/icons-material";
import { formatTime } from "../utils/formatTime";

export default function PlayerController({
  player,
  is_paused,
  duration,
  progress,
}) {
  const [currentProgress, setCurrentProgress] = useState(progress / 1000);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!is_paused && player) {
        setCurrentProgress((c) => c + 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [is_paused, player]);

  useEffect(() => {
    setCurrentProgress(progress / 1000);
  }, [progress]);
  console.log(player);

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
          {is_paused ? (
            <PlayArrow sx={{ width: 28, height: 28 }} />
          ) : (
            <Pause sx={{ width: 28, height: 28 }} />
          )}
        </IconButton>
        <IconButton
          size="small"
          sx={{ color: "text.primary" }}
          onClick={() => {
            player.nextTrack();
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
          {formatTime(progress)}
        </Typography>
        <Slider
          size="medium"
          value={currentProgress}
          min={0}
          max={duration / 1000}
          onChange={(_, v) => {
            setCurrentProgress(v);
          }}
          onChangeCommitted={(_, v) => {
            player.seek(v * 1000);
          }}
        />
        <Typography
          variant="body1"
          sx={{ color: "text.secondary", fontSize: 12 }}
        >
          {formatTime(duration)}
        </Typography>
      </Stack>
    </Stack>
  );
}
