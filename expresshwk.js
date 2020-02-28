const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world')
    
})

app.listen(9000, () => {
    console.log("listening to port 9000");
    
})