const express = require('express');
const path = require('path');

const app = express();

/*app.use(express.static(__dirname+'/dist/my-first-project'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/my-first-project/src/index.html'));

});*/
app.get(express.static('./dist/my-first-project'));
app.get('/*', (req,res) =>
    res.sendFile('index.html', {root:'dist/my-first-project/src/'}),

);
app.listen(process.env.PORT||8080);