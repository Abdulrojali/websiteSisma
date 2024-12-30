const accountsMahasiswa=require('../../models/accountsMahasiswa')
const accountsAdmin = require('../../models/accountsAdmin')
const bcrypt=require('bcrypt')
async function createAccountsMahasiswa(req,res){
    const {nama,nimMhs,kelas,user,pass,mail}=req.body 
    if(nama==='' || nimMhs===''  || kelas===''|| user==='' || pass ==='' || mail===''){
        res.status(300).send('input belum terisi semua')
    }
    else{
        try{
            const hash=bcrypt.genSaltSync(10)
            const passwordHash=bcrypt.hashSync(pass,hash)
            const newAccounts = new accountsMahasiswa({
                name:nama,
                nim:nimMhs,
                class:kelas,
                username:user,
                password:passwordHash,
                email:mail,
                role:'mahasiswa',
            })   
            if(newAccounts){
                await newAccounts.save()
                res.status(200).send('sukses to create Accounts')
            }
            else{
                res.status(401).send('invalid to create Accounts')
            }
        }
        catch(err){
            throw new Error(err)
        }
    }
}


async function createAccountsAdmin(req,res){
    const {niaa,name,user,pass,mail}=req.body 
    if(niaa==='' || name==='' || user==='' || pass ==='' || mail===''){
        res.status(300).send('input belum terisi semua')
    }
    else{
        const hash=bcrypt.genSaltSync(10)
        const passwordHash=bcrypt.hashSync(pass,hash)
        const newAccounts = new accountsAdmin({
            nia:niaa,
            nama:name,
            username:user,
            password:passwordHash,
            email:mail,
            role:'admin',
        })   
        if(newAccounts){
            await newAccounts.save()
            res.status(200).send('sukses to create Accounts')
        }
        else{
            res.status(401).send('invalid to create Accounts')
        }
    }
}

module.exports={createAccountsAdmin,createAccountsMahasiswa}