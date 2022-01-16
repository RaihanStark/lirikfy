import axios from "axios";

const PREFIX_URL = "https://corsanywhere.herokuapp.com/";
const BASE_URL = `${PREFIX_URL}https://api.musixmatch.com/ws/1.1`;
const API_KEY = `&apikey=${process.env.REACT_APP_MM_APIKEY}`;

const getSongByLyrics = (lyrics) => {
  const URL = `${BASE_URL}/track.search?q_lyrics=${encodeURI(
    lyrics
  )}${API_KEY}`;

  return axios.get(URL).then((res) => res.data);
};

export { getSongByLyrics };
