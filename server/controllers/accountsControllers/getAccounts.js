const accountsMahasiswa=require('../../models/accountsMahasiswa')
const accountsAdmin=require('../../models/accountsAdmin')

async function getAccountsMahasiswa(req,res){
    const getAccounts=await accountsMahasiswa.find({})
    if(getAccounts){
        res.status(200).send(getAccounts)
    }
    else{
        res.status(401).send('invalid to create Accounts')
    }
}

async function getAccountsAdmin(req,res){
    const getAccounts=await accountsAdmin.find({})
    if(getAccounts){
        res.status(200).send(getAccounts)
    }
    else{
        res.status(401).send('invalid to create Accounts')
    }
}
module.exports={getAccountsMahasiswa,getAccountsAdmin}