const express = require('express');
const path = require('path');

const app = express();

const PORT = 3000;

// Setting View Engine
app.set('view engine', 'ejs');

// middlewares
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.render("index");
});


app.listen(PORT, (req, res) => {
    console.log(`Server listing on http://localhost:${PORT} 🚀`);
});