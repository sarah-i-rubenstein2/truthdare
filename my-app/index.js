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
            getTruth(res);
        break;
    }
});

// get truth

function getTruth(res){
    axios({
        method: 'get',
        url: 'https://api.truthordarebot.xyz/v1/truth'
    })
    .then(function(response){
        res.send(response.data);
        console.log("sending data to frontend");
    })
}


// get dare

function getDare(res){
    axios({
        method: 'get',
        url: 'https://api.truthordarebot.xyz/api/dare '
    })
    .then(function(response){
        res.send(response.data);
        console.log("sending data to frontend");
    })
}


// get would you rather

function getWyr(res){
    axios({
        method: 'get',
        url: 'https://api.truthordarebot.xyz/api/wyr'
    })
    .then(function(response){
        res.send(response.data);
        console.log("sending data to frontend");
    })
}

// get never have I ever 

function getNhie(res){
    axios({
        method: 'get',
        url: 'https://api.truthordarebot.xyz/api/nhie'
    })
    .then(function(response){
        res.send(response.data);
        console.log("sending data to frontend");
    })
}

// get paranoia 

function getParanoia(res){
    axios({
        method: 'get',
        url: 'https://api.truthordarebot.xyz/api/paranoia'
    })
    .then(function(response){
        console.log(response.data);
    })
}

app.listen(3000);