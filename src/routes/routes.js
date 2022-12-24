var express = require('express');
var app = express();
var PORT = 3000;

// Single routing
let router = express.Router();
let login = express.Router();
router.get('/', function (req, res) {
    console.log('Router Working');
    res.end();
});
login.get('/login', (req, res) => {
    console.log('Login Router Working !!');
    res.end();
});
app.use(router);

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log('Server listening on PORT', PORT);
});
