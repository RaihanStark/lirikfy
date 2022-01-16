import { createTheme, ThemeProvider } from "@mui/material/styles";
import { themeOptions } from "./Theme";
import Navbar from "./components/Navbar";
import {
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardActions,
  Chip,
} from "@mui/material";
import Header from "./components/Header";
import { useState } from "react";

import { getSongByLyrics } from "./services/musicMatchService";

const theme = createTheme(themeOptions);

function App() {
  const [lyricsInput, setLyricsInput] = useState("");
  const [lyricsLoading, setLyricsLoading] = useState(false);
  const [lyricsData, setlyricsData] = useState(false);

  const searchLyricsHandler = (lyrics) => {
    setLyricsLoading(true);
    getSongByLyrics(lyrics).then((res) => {
      setLyricsLoading(false);
      setlyricsData(res.message);
      console.log(res.message);
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Header
        lyricsState={{ lyricsInput, setLyricsInput }}
        searchLyricsHandler={searchLyricsHandler}
        loadingState={lyricsLoading}
      />

      {lyricsData && (
        <Typography variant="h5" px={2} pt={5}>
          Search results:
        </Typography>
      )}

      <Grid container spacing={2} p={2}>
        {lyricsData &&
          lyricsData.body.track_list.map((item) => {
            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                sx={{ height: "100%" }}
                key={item.track.commontrack_id}
              >
                <Card variant="outlined">
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {item.track.album_name}
                    </Typography>
                    <Typography variant="h5" component="div">
                      {item.track.track_name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      by {item.track.artist_name}
                    </Typography>
                    {item.track.explicit === 1 && (
                      <Chip label="Explicit" size="small" color="error" />
                    )}
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={() => window.open(item.track.track_share_url)}
                    >
                      Read Full Lyrics
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        {/* <Grid item xs={3}>
          <Card variant="outlined">
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                The Stage
              </Typography>
              <Typography variant="h5" component="div">
                Gunslinger
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                by Avenged Sevenfold
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid> */}
      </Grid>
    </ThemeProvider>
  );
}

export default App;
