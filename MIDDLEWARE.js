// const express = require('express');
// const app = express();
// app.use((req,res,next) => {
//     console.log(`${new Date().toString()}: ${req.method}${req.url}`);
//     next();
// });
// app.use((req,res,next) => {
//     res.setHeader('X-CustomHeader', 'Hello from Custom Middleware');
//     next();
// });
// app.get('/', (req, res) => {
//     res.send('Hello world:');
// });
// app.listen(2400,() => {
//     console.log('Server listening on port 2100');
// });
const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    const readStream = fs.createReadStream('formmiddfrn.html');
    readStream.pipe(res);
});
app.post('/submit', (req,res) => {
    console.log(req.body);
    res.send('Submitted');
});

app.listen(9000,() => {
    console.log('Server listening on port 9000');
});