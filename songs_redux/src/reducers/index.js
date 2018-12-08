import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Song 1", duration: "4:00" },
    { title: "Song 2", duration: "3:00" },
    { title: "Song 3", duration: "5:00" },
    { title: "Song 4", duration: "8:00" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
