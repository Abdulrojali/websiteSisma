import {defineStore} from 'pinia'
import axios from 'axios'
import {ref} from 'vue'


export const createAccountsMahasiswa =defineStore('createAccountsMahasiswa',{
    state:()=>({
        endpointCreateAccounts :'http://localhost:8080/sima/createAccountsMahasiswa',
        statusCreateAccounts :null,
    }),
    actions:{
        async createAccounts(name,nim,klass,username,password,email){
            const payload={
                nama:name.value,
                nimMhs:nim.value,
                kelas:klass.value,
                user:username.value,
                pass:password.value,
                mail:email.value
            }
            try{
                const respons=await axios.post(this.endpointCreateAccounts,payload)
                if(respons){
                    this.statusCreateAccounts=true
                }
                else{
                    this.statusCreateAccounts=false
                }
            }
            catch{
                console.log('error')
            }
        }
    }
})

export const createAccountsAdmin =defineStore('createAccountsAdmin',{
    state:()=>({
        endpointCreateAccounts :'http://localhost:8080/sima/createAccountsAdmin',
        statusCreateAccounts :null,
    }),
    actions:{
        async createAccounts(name,nii,username,password,email){
            const payload={
                niaa:nii.value,
                nama:name.value,
                user:username.value,
                pass:password.value,
                mail:email.value
            }
            try{
                const respons=await axios.post(this.endpointCreateAccounts,payload)
                if(respons){
                    this.statusCreateAccounts=true
                }
                else{
                    this.statusCreateAccounts=false
                }
            }
            catch{
                console.log('error')
            }
        }
    }
})