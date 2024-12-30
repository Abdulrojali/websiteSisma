const {getPremits,
    newPremits,
    viewPremitsById,
    deletePremits,
    updatePremits,
    getPremitsByIdUser,
}
    =require('../controllers/premitsControllers/premitsControllers')

   
    const app = require('express')
    const router = app.Router()

    router.get('/premits',getPremits)
    router.get('/premits/:id',viewPremitsById)
    router.get('/premits/mahasiswa/:id',getPremitsByIdUser)
    router.post('/premits',newPremits)
    router.post('/premits/:id',updatePremits)
    router.delete('/premits/:id',deletePremits)
module.exports=router
    