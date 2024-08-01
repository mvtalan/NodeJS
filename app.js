const express = require('express');
const ejs = require('ejs');

const app = express();
const PORT = 3000;

//setting the view engine
app.set('view engine', 'ejs');
app.set('veiws', './views');

//middleware
// app.use((req,res, next) => {
//     console.log('Middleware Executed.');
//     next();
// })

// route controller with a path parameter
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User with ID ${userId}`);
})

app.get('/', (req, res) => {
    
    const data = {
        title: 'Hello Red Deer!',
        message: 'Welcome to my website.'
    }
    res.render('index', {data});
});

app.listen(3000, () => {
    console.log(`Server started on port ${PORT}`);
});