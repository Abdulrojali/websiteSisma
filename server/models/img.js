const mongoose =require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.URL_Db)
.then((Res)=>console.log(Res))
.catch((err)=>console.log(err))

const imgSchema=new mongoose.Schema({
    filename:{
        type:String
    },
    size:{
        type:String
    },
    url:{
        type:String
    }
})
const imgProfile = mongoose.model('imgProfile',imgSchema)

module.exports=imgProfile