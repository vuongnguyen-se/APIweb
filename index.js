import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;
const API_URL = "https://v2.jokeapi.dev/joke/Any";

//mantain the web background
app.use(express.static("public"));

//get the joke using axios 
app.get("/", async(req, res) =>{
    try {
        const result = await axios.get(API_URL);
        res.render("index.ejs", {setup : result.data.setup , answer : result.data.delivery});
    } catch (error) {
        res.render("index.ejs", {setup : error.response.data});
    }
});

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
});