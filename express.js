const express = require('express');
const fs = require('fs');
const app = express()
app.use(express.urlencoded());

let name;
function getName() {
    return name;
}

function run() {
    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/index.html');
    });
    
    app.post('/set-name', function(req, res) {
        name = req.body.name;
        let data = fs.readFileSync(__dirname + '/set-name.html', 'utf8');
        res.send(data.replace('${greetingName}', req.body.name));
    });
    
    app.listen(8000, () => {});
}


exports.getName = getName;
exports.run = run;
