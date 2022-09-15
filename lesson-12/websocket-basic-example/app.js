const ws = new require("ws");

const wsServer = new ws.Server({port: 5000});

// button.addEventListener("click", function())

const clients = [];

wsServer.on("connection", (newClient)=> {
    clients.push(newClient);
    // console.log("New frontend connection");
    setTimeout(() => {
        newClient.send("Welcome to group");
    }, 3000);

    newClient.on("message", (message)=> {
        console.log(message.toString());
    })

    clients.forEach(client => {
        if(client !== newClient) {
            client.send("New client join to group")
        }
    })
});

