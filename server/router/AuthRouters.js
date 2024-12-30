const app = require('express')
const router= app.Router()

const {createAccountsMahasiswa,createAccountsAdmin}=require('../controllers/accountsControllers/createAccountsControllers')
const {loginAuthMahasiswa,loginAuthAdmin} = require('../controllers/accountsControllers/loginAuthControllers')
router.post('/login/accounts/mahasiswa',loginAuthMahasiswa)
router.post('/login/accounts/admin',loginAuthAdmin)
router.post('/createAccountsMahasiswa',createAccountsMahasiswa)
router.post('/createAccountsAdmin',createAccountsAdmin)

module.exports= router