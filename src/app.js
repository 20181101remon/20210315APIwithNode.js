//將所有要安裝的檔案引入
import express from 'express';
import http from 'http';
import cookieParse from 'cookie-parser';
import path from 'path';
import  cors from 'cors';
import morgan from 'morgan';
import passport from 'passport';
import session from 'express-session';
//由於api內容寫在index.js中,因此需要import進來,才使的app.js得以使用
import index from './routes/index';

//使用express的東西
const app=express();

//使用dotenv
require('dotenv').config();


app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParse());
app.use(express.static(path.resolve(__dirname,'../view')));
app.use(morgan('dev'));
app.use(cors());

//寫完這個才能使用下面兩個
app.use(session({
        secret:process.env.APP_KEY,
        resave:false,
        saveUninitialized:false,
}))

app.use(passport.initialize())
app.use(passport.session())

//開api
// app.use('/api',(req,res,next)=>{
//     res.status(200).json({message:'5'})
// })

app.use('/api',index)

const server=http.createServer(app);

server.listen(3001);

server.on('listening',()=>{
    const addr=server.address();
    console.log(`This server is on ${addr.port}`);
})

