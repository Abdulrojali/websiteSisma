const mongoose =require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.URL_Db)
.then((Res)=>console.log(Res))
.catch((err)=>console.log(err))


const schema = new mongoose.Schema({
    name:{
        type:String
    },
    nim:{
        type:Number
    },
    class:{
        type:String
    },
    username:{
        type:String
    },
    password:{
        type:String
    },
    email:{
        type:String
    },
    role:{
        type:String,
        required:true
    }
})


const accountsMahasiswa = mongoose.model('accountsMahasiswa',schema)
module.exports=accountsMahasiswa