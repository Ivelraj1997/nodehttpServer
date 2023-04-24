const httpServer=require("http");
const port = process.env.port || 3000;
httpServer.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World!');
    res.end();
}).listen(port,()=>{
    console.log(`server listening on port ${port}`)
})