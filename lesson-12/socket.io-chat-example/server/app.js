const {Server} = require("socket.io");
const {createServer} = require("http");

const httpServer = createServer();

const io = new Server(httpServer, {
    cors: {
        origin: "*"
    }
});

io.on("connection", (socket)=> {
    // console.log("New connection from server");
    socket.on("chat-message", (message) => {
        socket.broadcast.emit("chat-message", message);
    })
})

httpServer.listen(5000);