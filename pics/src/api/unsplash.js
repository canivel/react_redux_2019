import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 4c5f7c0748c91c47214296bee08dae7f2c403fe884308832df55f9336d3abf72"
  }
});
