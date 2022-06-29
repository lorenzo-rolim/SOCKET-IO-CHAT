const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

io.on("connection", (socket) => {
  socket.on("connectuser", (data) => {
    io.emit("connectmsg", data);
  });

  socket.on("msg", (data) => {
    io.emit("resultado", `${data.username}: ${data.msg}`);
  });
});

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

server.listen(3333, () => {
  console.log("Servidor Rodando!");
});
