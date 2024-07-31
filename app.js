const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello!');
});

app.listen(3000, () => {
    console.log(`Server started on port ${PORT}`);
});