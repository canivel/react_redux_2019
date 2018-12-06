import axios from "axios";
const KEY = "AIzaSyAq0TYa4kg_MfcHxpid1gi5Da6ty5uqZVU";

// params = {
//   maxResults: "25",
//   part: "snippet",
//   q: "surfing",
//   type: ""
// };

//base config to me passed to all methods
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    maxResults: "5",
    part: "snippet",
    key: KEY
  }
});
