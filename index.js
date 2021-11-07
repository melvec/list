const express = require('express');
const app = express();
const path = require('path');

const chance = require("chance").Chance();
const shufleArray = require("shuffle-array");

app.set('port', process.env.PORT || 3000);

app.get("/data", (req,res) => {
    res.send("hey dom");
}

)

app.listen(app.get('port'), ()=>{
    console.log('server on port', app.get('port'));
 
 });