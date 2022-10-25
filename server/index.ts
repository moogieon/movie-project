import axios from "axios";

const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();
// CORS
const cors = require("cors");

// body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS 허용
let corsOptions = {
  origin: "https://openapi.naver.com",
  credentials: true,
};
app.use(cors(corsOptions));

app.get("/api/search", (req, res) => {
  // 클라이언트에서 보낸 검색어
  const searchKeyword = req.query.query;

  axios
    .get("https://openapi.naver.com/v1/search/movie.json", {
      params: {
        query: searchKeyword,
        display: 100, // 검색 결과 노출 개수
      },
      headers: {
        "X-Naver-Client-Id": "cfybR7o0rORS6LH4BQwP",
        "X-Naver-Client-Secret": "J7VrzvlXZH",
      },
    })
    .then((response) => {
      const { data } = response;
      // 클라이언트에 보내기
      res.send(data.items);
    })
    .catch((error) => {
      let message = "Unknown Error";
      if (error instanceof Error) message = error.message;
      console.log(message);
    });
});
