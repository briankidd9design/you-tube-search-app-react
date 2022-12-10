import axios from "axios";

const KEY = "AIzaSyAgGyB9inHHn73tmU6XzX73CXeRbXKsyNk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
