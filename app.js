const express = require('express');

const app = express();
const PORT = 3000;

//middleware
// app.use((req,res, next) => {
//     console.log('Middleware Executed.');
//     next();
// })

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User with ID ${userId}`);
})

app.get('/', (req, res) => {
    res.send('Hello Red Deer!');
});

app.listen(3000, () => {
    console.log(`Server started on port ${PORT}`);
});