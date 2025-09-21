// server.js
import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults({ noCors: false });

server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // allow all origins
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

server.use(middlewares);
server.use(router);

server.listen(3000, () => {
    console.log("JSON Server is running");
});
