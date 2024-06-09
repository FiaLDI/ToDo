const express = require("express");
const consolidate = require('consolidate');
const fs = require('fs');
const { create } = require("domain");
// const script_search = require('app/script_parser.js')

const app = express();
app.engine('hbs', consolidate.handlebars);
app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views/`);

let toDo = []

// создаем парсер для данных application/x-www-form-urlencoded
const urlencodedParser = express.urlencoded({extended: false});

// for cite
app.get('/css', (req, res)=> {
    res.sendFile(`${__dirname}/css/style.css`)
});
app.get('/img/:imgg', (req, res)=> {
    res.sendFile(`${__dirname}/img/` + req.params["imgg"])
});
app.get('/app/:jsfiles', (req, res)=> {
    res.sendFile(`${__dirname}/app/` + req.params["jsfiles"])
});


app.get('/', (req, res)=> {
    res.render('index', {
        title: 'Todo'
    })
});


app.post("/", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    
    let curCommand = JSON.parse(JSON.stringify(request.body));
    console.log(curCommand);

    if (curCommand.create_do) {
        toDo.push({
            name: curCommand.add_text,
            id: toDo.length,
        })
    }
    
    if (curCommand.remove_do) {
        let remArr = curCommand.remove_do.split(',');

        remArr  = remArr.map((item) => {
            let number = parseInt(item);
            return isNaN(number)? item : number;
        });
        remArr.forEach(element => {
            delete toDo[element]
        });

    }

    response.render('index', {
        title: 'Task',
        toDo: toDo,
    })

});

   
app.listen(3000, ()=>console.log("Сервер запущен..."));
