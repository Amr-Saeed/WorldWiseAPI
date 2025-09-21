// server.js
import jsonServer from "json-server";
import cors from "cors";

// Railway/Render/Vercel set PORT in env, fallback to 3000
const PORT = process.env.PORT || 3000;

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(cors()); // allow all origins
server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
    console.log(`✅ JSON Server is running on port ${PORT}`);
});
