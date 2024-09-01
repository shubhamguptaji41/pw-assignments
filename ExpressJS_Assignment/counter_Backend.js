const express = require('express')
const app = express();

let counter = 0;

//Endpoint to get the counter data
app.get('/', (req,res) => {
   res.json({ counter });
});

//Endpoint to increment the count
app.post('/increment', (req,res) =>{
    counter++;
    res.json({counter});
})

//Endpoint to decrement the count
app.post('/decrement', (req,res) =>{
    counter--;
    res,json({counter});
});

// starting the port
const port = 3021
app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
});

