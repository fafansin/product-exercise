const express = require('express');
const app = express();
const path = require('path');


const root = path.join(__dirname, '../client', 'build');
app.use(express.static(root));

const PORT = process.env.PORT || 3500;

app.get('/api', (req, res) => {
  res.json({message:'hello from the server side'})
})

app.get("*", (req, res) => {
  res.sendFile('index.html', root)
})

app.listen(PORT, () => {
  console.log("SERVER UP on PORT", PORT)
})