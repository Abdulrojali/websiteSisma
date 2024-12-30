const mongoose =require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.URL_Db)
.then((Res)=>console.log(Res))
.catch((err)=>console.log(err))

const schema = new mongoose.Schema({
    nia:{
        type:Number,
    },
    nama:{
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
        type:String
    }
})


const accountsAdmin = mongoose.model('accountsAdmin',schema)
module.exports = accountsAdmin