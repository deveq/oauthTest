const express = require("express");
const app = express();
const axios = require("axios");
const qs = require("qs");
const session = require("express-session");
const cors = require("cors");

const PORT = 8080;
app.use(cors());
app.use(session({
    secret: 'ras',
    resave: true,
    secure: false,
    saveUninitialized: false,
}));

app.get("/", (req,res) => {
    res.send("hello world");
});

app.get("/kakao", (req,res) => {
    console.log(req.query);
    res.send("kakao ")
})

app.listen(PORT, () => {
    console.log(`listening ${PORT}`);
})