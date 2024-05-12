import express from 'express';
import cors from 'cors'
import connect from './connect/connect.js';
import router from './routes/router.js'

const app = express()
const PORT = 8000
connect()

//방금
//테스트용 cors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    next()
})

app.use(cors({
    // origin : git 주소, 로컬 주소
    origin : '*',
    method : ['GET', 'POST', 'DELETE', 'PUT'],
    credentials : true,
    optionsSuccessStatus: 200
}))

app.use(express.urlencoded({extended: false}))

app.use('/', router)
app.use('/test', router)

app.listen(PORT, () => {
    console.log('테스트 서버 실행')
})
