const httpServer=require("http");

httpServer.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World!');
    res.end();
}).listen(8080,()=>{
    console.log("server listening on port 3000")
})