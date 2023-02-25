const app = require('express')();
var path = require('path');

app.set('Views', path.join(__dirname,'views'));
app.set('view engine', 'hbs');

app.get('/',(req,res)=>{
    let peopleList = getRandomList();
    res.render('index',{people: peopleList});
});

let getRandomList = () => {
    let list = ['ada','lovelace','Newmann', 'gracehopper'];
    let limit = Math.floor(Math.random()* (list.length - 1 - 0)+0);
    return list.slice(limit);
};
app.listen(7000);