import { Grid, Avatar, Typography, Card } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function LibraryCard({ album }) {
  const navigate = useNavigate();

  console.log(album);
  return (
    <Grid
      item
      xs={6}
      sm={6}
      md={3}
      lg={2}
      onClick={() => navigate(`/playlist/${album.id}`)}
    >
      <Card
        sx={{ borderRadius: 2, bgcolor: "#222", padding: 2, cursor: "pointer" }}
      >
        <Avatar
          variant="square"
          src={album.images[0]?.url}
          sx={{
            width: "100%",
            height: "100%",
            aspectRatio: "1/1",
            marginBottom: 1,
          }}
        />
        <Typography sx={{ color: "text.primary", fontSize: 18 }}>
          {album.name}
        </Typography>
        <Typography
          sx={{
            color: "text.secondary",
            fontSize: 14,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
          }}
        >
          {album.description}
        </Typography>
      </Card>
    </Grid>
  );
}
