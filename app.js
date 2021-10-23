const express = require('express');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static('./portfolio/'))
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.sendFile('index.html',{root:__dirname})
});
app.get('/downloadCv', (req, res) => {
    res.sendFile('Affes_Achraf_CV.pdf',{root:__dirname})
});

app.listen(port, () => {
    console.log("Server is listening on port "+port);
});