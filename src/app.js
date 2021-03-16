//將所有要安裝的套件引入
import express from 'express';
import http from 'http';
import cookieParse from 'cookie-parser';
import path from 'path';
import cors from 'cors';
import morgan from 'morgan';
import passport from 'passport';
import session from 'express-session';
//由於api內容寫在index.js中,因此需要import進來,才使的app.js得以使用
import index from './routes/index';

//引入express的套件
const app = express();

//使用dotenv
require('dotenv').config();

//從前端收到的檔案收到jason格式(Controoler會轉)
app.use(express.json());
//不要讓網址有特殊字元
app.use(express.urlencoded({ extended: false }));
//前端的cookie儲存
app.use(cookieParse());
// 指定要讀哪個檔案,使用path.resolve讀取檔案名稱(__dirname),若未讀到,跑到靜態頁面
app.use(express.static(path.resolve(__dirname, '../view')));
//use使用morgan去做"使用"
app.use(morgan('dev'));

app.use(cors());

//建立passport的session機制
app.use(session({
    secret: process.env.APP_KEY,
    // 為了使用passport必須把下面兩個關掉
    resave: false,
    saveUninitialized: false,
}))
// passport初始化)原本Node有自己的?
app.use(passport.initialize())
// passport改為session機制
app.use(passport.session())

//開api前綴 使用前綴以區別前端與後端
// app.use('/api',(req,res,next)=>{
// 告知前台的使用者說成功(200)便給出json(你想惡意丟500也行啦W)
//     res.status(200).json({message:'5'})
// })

app.use('/api', index)
// 建立伺服器,將套件放入server上
const server = http.createServer(app);
// 設定啟用的PORT號
server.listen(3001);
// 將SERVER開啟
server.on('listening', () => {
    //告知現在正在監聽的port號,會丟回一個物件
    const addr = server.address();
    // 確定已經監聽到port號
    console.log(`This server is on ${addr.port}`);
})

// (ASK!!!為什麼babel知道要吃src)→start宣告
