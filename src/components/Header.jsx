import React, { useState } from "react";
import { Box } from "@mui/system";
import { Typography, TextField, Button, Grid } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

import HeroImg from "../img/hero-img.png";

function Header({ lyricsState, searchLyricsHandler, loadingState }) {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          "@media (max-width: 899.98px)": {
            order: 2,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            my: 3,
          }}
        >
          <Typography variant="h3">Lirikfy</Typography>
          <Typography variant="h5">Search a song from lyrics</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            disabled={loadingState}
            fullWidth
            id="outlined-basic"
            label="Lyrics"
            variant="outlined"
            sx={{ maxWidth: "20rem" }}
            value={lyricsState.lyricsInput}
            onChange={(e) => lyricsState.setLyricsInput(e.target.value)}
          />

          <LoadingButton
            loading={loadingState}
            sx={{ mt: 2 }}
            size="large"
            variant="contained"
            onClick={() => searchLyricsHandler(lyricsState.lyricsInput)}
          >
            Search
          </LoadingButton>
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        sx={{
          "@media (max-width: 899.98px)": {
            order: 1,
          },
        }}
      >
        <Box
          component="img"
          src={HeroImg}
          className="hero-img"
          sx={{
            width: "38rem",
            "@media (max-width: 899.98px)": {
              width: "100%",
            },
          }}
        />
      </Grid>
    </Grid>
  );
}

export default Header;
