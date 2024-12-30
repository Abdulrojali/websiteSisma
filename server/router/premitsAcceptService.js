    const {
        pushPremitsToAccepted,
        getPremitsAccepted
    }=require('../controllers/premitsControllers/premitsAcceptContollers')
   
    const app = require('express')
    const router = app.Router()
router.get('/AcceptPremits',getPremitsAccepted)
router.post('/AcceptPremits/pushData',pushPremitsToAccepted)

module.exports=router
    