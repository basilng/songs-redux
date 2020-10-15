import { combineReducers } from "redux";

const { act } = require("react-dom/test-utils");
const { selectSong } = require("../actions");

const songsReducer = () => {
  return [
    {
      title: "No scrubs",
      duration: "4:05",
    },
    {
      title: "Macarena",
      duration: "2:30",
    },
    {
      title: "All star",
      duration: "3:15",
    },
    {
      title: "I want it that way",
      duration: "1:05",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
