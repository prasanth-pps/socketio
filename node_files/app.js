const app = require("express")();
const httpServer = require("http").createServer(app);
const options = { /* ... */ };
const io = require("socket.io")(httpServer, options);

io.on("connection", socket => { /* ... */ });

app.get('/app',function(req,res){
	res.end("Welcome to Node.js HTTPS Servern");
})

httpServer.listen(2233);