const express = require("express");
const app = express();
const axios = require('axios');
const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({limit: '50mb'}));

// random thing I apparently need 

app.get('/', cors(), (req,res) => {
    res.send("Hi");
});

// called by frontend 

app.post("/", async (req, res) => {
    const { info } = req.body;

    switch(info.type) {
        case "truth":
            axios({
                method: 'get',
                url: 'https://api.truthordarebot.xyz/v1/truth'
            })
            .then(function(response){
                res.send(response.data);
                console.log("response sent to frontend");
            })
        break;
        case "dare":
            axios({
                method: 'get',
                url: 'https://api.truthordarebot.xyz/api/dare '
            })
            .then(function(response){
                res.send(response.data);
                console.log("response sent to frontend");
            })
        break;
        case "wyr":
            axios({
                method: 'get',
                url: 'https://api.truthordarebot.xyz/api/wyr'
            })
            .then(function(response){
                res.send(response.data);
                console.log("response sent to frontend");
            })
        break;
        case "nhie":
            axios({
                method: 'get',
                url: 'https://api.truthordarebot.xyz/api/nhie'
            })
            .then(function(response){
                res.send(response.data);
                console.log("response sent to frontend");
            })
        break;
        case "paranoia":
            axios({
                method: 'get',
                url: 'https://api.truthordarebot.xyz/api/paranoia'
            })
            .then(function(response){
                console.log(response.data);
                console.log("response sent to frontend");
            })
        break;
    }
});


app.listen(3000);