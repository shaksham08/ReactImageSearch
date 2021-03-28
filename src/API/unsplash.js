import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 9ldG4dqA2eOyHoPEfK3ZTDmMuerRlKrcn5R568pW42g",
  },
});
