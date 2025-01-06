const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send("hello!"));
app.get('/student', (req, res) => res.send("Nishil!"));
app.get('/uni', (req, res) => res.send("Rk university!"));

app.listen(port,()=>console.log(`example listening on port ${port}!`));