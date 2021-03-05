const express = require('express');
const configure = require("./config.js");

const app = express();

app.get('/', (req, res)=>{
    res.send('Hello World!')
})

app.listen(configure.port, () => {
  console.info(`running on ${configure.port}`);
});