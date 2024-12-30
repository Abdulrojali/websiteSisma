const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser= require('body-parser')
const app = express()
const upload = require('./middleware/multerImg.js')
// middleware
const settingMiddleware=require('./middleware/settingMiddleware')


// settings 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
// app.use(express.json())
// app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(morgan('dev'))
app.use(settingMiddleware)


// routing
app.use('/sima',require('./router/AuthRouters'))
app.use('/sima',require('./router/premitsService'))
app.use('/sima',require('./router/premitsAcceptService'))
app.use('/sima',upload.single('img'),require('./router/imgService.js'))

const {getAccountsAdmin,getAccountsMahasiswa}= require('./controllers/accountsControllers/getAccounts.js')
app.get('/sima/accounts/Admin',getAccountsAdmin)
app.get('/sima/accounts/Mahasiswa',getAccountsMahasiswa)

app.listen(8080,()=>{
    console.log('http://localhost:8080')
})

module.exports=app