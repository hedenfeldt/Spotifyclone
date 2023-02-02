import React, { useEffect, useState } from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { height } from "@mui/system";
import SongTable from "../components/SongTable";
import { useParams } from "react-router-dom";

export default function Playlist({ spotifyApi }) {
  const { id } = useParams();
  const [playlist, setPlaylist] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getPlaylist() {
      const playlistInfo = await spotifyApi.getPlaylist(id);
      console.log(playlistInfo);
      setPlaylist(playlistInfo.body);

      setIsLoading(false);
    }
    getPlaylist();
  }, [id]);

  return (
    <Box sx={{ bgcolor: "Background.paper", flex: 1, overflowY: "auto" }}>
      <Box
        p={{ xs: 3, md: 4 }}
        sx={{
          width: "100%",
          display: "flex",
          background: "linear-gradient(#946868, #121212)",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 3,
          boxSizing: "border-box",
        }}
      >
        <Avatar
          variant="square"
          src={playlist?.images[0]?.url}
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
            {playlist?.name}
          </Typography>
        </Box>
      </Box>
      <SongTable
        songs={playlist?.tracks.items.map((song, i) => ({
          ...song,
          track: {
            ...song.track,
            context_uri: `spotify:playlist:${id}`,
            position: i,
            offset: { position: i },
          },
        }))}
        isLoading={isLoading}
        spotifyApi={spotifyApi}
      />
    </Box>
  );
}
