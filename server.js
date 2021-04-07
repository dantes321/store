const http = require('http');

const server = http.createServer()

server.on('request',(req,res) => {

    res.writeHead(200,{'Content-type':'text/html'})
    res.end(`
<html>
<head>

</head>
<body>
    <div>Hi there</div>
    <input type="text">
</body>

           
</html>
        
    `)
})

server.listen(3000,() => {
    console.log('Server is working!')
})