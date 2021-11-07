const express = require('express');
const app = express();
const path = require('path');

const chance = require("chance").Chance();
const shuffleArray = require("shuffle-array");

app.set('port', process.env.PORT || 3000);


const data = {

    headers:["Name","Age","Profession","Country"],
    rows: new Array(10).fill(undefined).map(()=>{
       return [
          chance.name(),
          chance.age(),
          chance.profession(),
          chance.country({full:true}),
       ];
    }
 
    )
 }

 app.get("/data", (req,res)=>
 {
    res.json({
 headers: data.headers,
 rows: shuffleArray(data.rows),
 lastUpdated: new Date().toISOString()
 
    });
 });

 //Static files
app.use(express.static(path.join(__dirname,'public')));

app.listen(app.get('port'), ()=>{
    console.log('server on port', app.get('port'));
 
 });