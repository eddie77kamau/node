// import packages 
const express = require('express')

// initialize
const app = express();

// create route 
app.get('/',(req,res) =>{
    res.send('This is express.js')
})
// define port 
const port = 7001

// start server
app.listen(port)