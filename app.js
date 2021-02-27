const fs = require('fs');
let moment = require('moment');


const superHerois = require("./superHerois");

let dados = fs.readFileSync(__dirname + '/dados.txt', 'utf8');
let data = moment().format('MMMM Do YYYY, h:mm:ss a');

console.log(superHerois + "oi");

console.log ("Salvando no git");

//teste