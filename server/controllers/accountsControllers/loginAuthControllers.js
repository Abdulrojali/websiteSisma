const accountsMahasiswa=require('../../models/accountsMahasiswa')
const accountsAdmin = require('../../models/accountsAdmin')
const jwt= require('jsonwebtoken')
const bcrypt=require('bcrypt')
const {generateToken,decodeToken}= require('../tokenContollers/generateToken')


 async function loginAuthMahasiswa(req,res){
    const {user,pass}=req.body
    const authUsername= await accountsMahasiswa.find({username:user})
    if(!authUsername){
        res.status(305).send('not match data')
    }
    else{
        authUsername.filter(data=>{
            const authPassword = bcrypt.compareSync(pass,data.password)
            if(!authPassword){
                res.status(304).send('invalid login, not match password')
            }
            else{
                console.log(data._id)
                const payload={
                    status:200,
                    boolean:true,
                    roleUser:data.role,
                    idMahasiswa:data._id
                }
                const token=generateToken(payload)
                const dataDecode=decodeToken(token)
                if(token){
                    res.status(200).json({
                    token,
                    payload,
                    dataDecode
                    })
                }
                else{
                    res.status(300).send('invalid to generate token')
                }
            }
        })
    }
}

async function loginAuthAdmin(req,res){
    try{
        const {user,pass}=req.body
        if(user,pass){
            const authUsername= await accountsAdmin.find({username:user})
            if(!authUsername){
                res.status(305).send('not match data')
            }
            else{
                authUsername.filter(data=>{
                    const authPassword = bcrypt.compareSync(pass,data.password)
                    console.log(authPassword)
                    if(!authPassword){
                        res.status(304).send('invalid login, not match password')
                    }
                    else{
                        const payload={
                            status:200,
                            roleUser:data.role,
                            idMahasiswa:data._id
                        }
                        const token=generateToken(payload)
                        if(token){
                            res.status(200).json({
                                token,
                                payload
                            })
                        }
                        else{
                            res.status(300).send('invalid to generate token')
                        }
                    }
                })
            }
        }
        else if(user==='' || pass===''){
            res.statu(301).send('input kosong!!')
        }
        else{
            res.status(401).send('not found request')
        }   
    }
    catch(err){
        res.status(404).send(err)
    }
}

module.exports = {loginAuthMahasiswa,loginAuthAdmin}