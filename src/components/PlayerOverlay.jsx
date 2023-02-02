import {
  Box,
  Container,
  Grid,
  IconButton,
  Avatar,
  Typography,
} from "@mui/material";
import React from "react";
import { KeyboardArrowDown } from "@mui/icons-material";
import PlayerController from "./PlayerController";

export default function PlayerOverlay({
  playerOverlayIsOpen,
  closeOverlay,
  song,
  progress,
  is_paused,
  duration,
  player,
}) {
  return (
    <Box
      sx={{
        bgcolor: "Background.paper",
        positioin: "fixed",
        height: "100vh",
        transform: playerOverlayIsOpen
          ? "translateY(0px)"
          : "translateY(100vh)",
        transition: "transfrom 300ms",
        top: 0,
        left: 0,
        width: "100%",
        display: { xs: "block", md: "none" },
      }}
    >
      <Container
        sx={{
          height: "100%",
          background: "linear_gardient(#121212,#f0790050)",
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          sx={{ height: "100%" }}
        >
          <Grid
            item
            xs={1}
            sx={{ display: "flex", alignItems: "center", position: "relativ" }}
          >
            <IconButton onClick={closeOverlay}>
              <KeyboardArrowDown
                fontSize="large"
                sx={{ color: "text.primary" }}
              />
            </IconButton>
          </Grid>
          <Grid
            item
            xs={5}
            sx={{
              backgroundImage: `url(${song?.album.images[0]?.url})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              objectFit: "contain",
            }}
          ></Grid>
          <Grid item xs={1}>
            <Typography
              variant="body1"
              sx={{ color: "text.primary", fontSize: 28 }}
            >
              {song.name}
            </Typography>{" "}
            <Typography
              variant="body1"
              sx={{ color: "text.primary", fontSize: 28 }}
            >
              {song.artists[0].name}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <PlayerController
              progress={progress}
              is_paused={is_paused}
              duration={duration}
              player={player}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
