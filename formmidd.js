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