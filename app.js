const express = require('express');
const ejs = require('ejs');
const router = require("./routes/pages");

const app = express();
const PORT = 3000;

//==================================
// //setting the view engine
// app.set('view engine', 'ejs');
// app.set('veiws', './views');

// //middleware
// // app.use((req,res, next) => {
// //     console.log('Middleware Executed.');
// //     next();
// // })

// // route controller with a path parameter
// app.get('/users/:id', (req, res) => {
//     const userId = req.params.id;
//     res.send(`User with ID ${userId}`);
// })

// app.get('/', (req, res) => {
    
//     const data = {
//         title: 'Hello Red Deer!',
//         message: 'Welcome to my website.'
//     }
//     res.render('index', {data});
// });

// app.listen(3000, () => {
//     console.log(`Server started on port ${PORT}`);
// });

//==================================

//=======================
// app.use(router);

// app.listen(PORT, () => {
//     console.log(`Server started on port ${PORT}`);
// });

//=======================

//=====QUERY parameters
app.get('/', (req, res) => {
    const id = req.query.id;
    const username = req.query.username;

    res.send(`User ID = ${id}, Username = ${username}`);
});

app.get('/products/:id', (req,res) => {
    const productId = req.params.id;

    const products = [
        {"id" : 1, "name" : "Product A"},
        {"id" : 2, "name" : "Product B"},
        {"id" : 3, "name" : "Product C"}
    ]

    const product = products.find( product => product.id == parseInt(productId));

    res.send(`Product Id = ${product.id}, Product name = ${product.name}`);
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

//======================