const express = require('express');
const path = require('path');
const morgan = require('morgan');
const indexRouter = require('./routes/indexRouter');
const searchRouter = require('./routes/searchRouter');

const app = express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');

app.use(express.static(path.join(__dirname,'public')));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/',indexRouter);
app.use('/search',searchRouter);

app.listen('8080',()=>{
    console.log('8080번 포트에서 서버 실행 중!');
});