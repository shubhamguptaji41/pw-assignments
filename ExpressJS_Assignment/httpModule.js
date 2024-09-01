const { create } = require("domain");
const http = require("http")

//dummy product data
const menProducts = [
    {id: 1, name: 'Men Product 1'},
    {id: 2, name: 'Men Product 2'},
];

const womenProducts = [
    {id:1, name: 'Women Product 1'},
    {id:2, name: 'Women Product 2'},
];

//creating a server

const server = http.createServer((req, res) => {
    res.setHeader('Content-type', 'application/json');
    
    //Handle different routes
    if(req.url ==='/'){
        res.statusCode = 200;
        res.end(JSON.stringify({ message: 'Welcome to Men & Women Dummy data'}))
    }else if(req.url ==='/men'){
        res.statusCode = 200;
        res.end(JSON.stringify(menProducts));
    }else if(req.url ==='/women'){
        res.statusCode = 200;
        res.end(JSON.stringify(womenProducts));
    }else {
        res.statusCode = 500;
        res.end(JSON.stringify({message:'Page not Found'}));
    }

});

// start a port
const port = 4020;
server.listen(port, () =>{
   console.log(`Server is running on port ${port}`);
});