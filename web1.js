const http= require("http");
const server = http.createServer((req, res) => {
    res.end("HII  gud evening");
});
server.listen(8000, "127.0.0.1", () => {
    console.log("LIStening");
});