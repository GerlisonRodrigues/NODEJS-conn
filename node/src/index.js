const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: false}));

app.get('/', (req, res) =>{
    res.send('conectado sucesso');
});

require('./controles/authControler')(app);
app.listen(8000);