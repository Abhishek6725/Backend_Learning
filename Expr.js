
const express = require('express');
const path = require('path');


const app = express();
const port = 8000; 

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.post('/download', (req, res) => {
  const fileName = req.body.fileName; 

  
  res.sendFile(path.join(__dirname, 'files', fileName));
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});