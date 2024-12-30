import {defineStore} from 'pinia'
import axios from 'axios'
import {ref} from 'vue'

export const loginAccountsMahasiswa=defineStore('loginAccountsMahasiswa',{
    state:()=>({
        dataAccounts:ref(''),
        endpointLoginMahasiswa:'http://localhost:8080/sima/login/accounts/mahasiswa',
        statusLoginMahasiswa:null,
        dataLogAccounts:ref(''),
        dataPayload:ref(''),
        dataIdMahasiswa:ref(''),
        dataToken:ref(''),
        dataIdMahasiswa:null
    }),
    actions:{
        async loginAuthMahasiswa(username,password){
                const validation=await axios.post(this.endpointLoginMahasiswa,{user:username.value,pass:password.value})
                if(validation){
                    this.statusLoginMahasiswa=true
                    this.dataLogAccounts=validation.data
                    this.dataToken=this.dataLogAccounts.token
                    this.dataPayload=this.dataLogAccounts.payload     
                    localStorage.setItem('id',this.dataPayload.idMahasiswa)
                }
                else{
                    this.statusLoginMahasiswa=false
                }
        },
         logout(){
            localStorage.removeItem('id')
            this.dataToken=null,
            localStorage.removeItem('tokenApi')
        },
    }
})

export const loginAccountsAdmin=defineStore('loginAccountsAdmin',{
    state:()=>({
        dataAccounts:ref(''),
        endpointLoginAdmin:'http://localhost:8080/sima/login/accounts/admin',
        statusLoginAdmin:null,
        dataLogAdmin:null,
        dataToken:null,
        dataIdAdmin:null
    }),
    actions:{
        async loginAuthAdmin(username,password){
                const validation=await axios.post(this.endpointLoginAdmin,{user:username.value,pass:password.value})
                if(validation){
                    this.statusLoginAdmin=true
                    this.dataLogAdmin=validation.data
                    this.dataToken=this.dataLogAdmin.token
                    this.dataIdAdmin=localStorage.setItem('id',this.dataLogAdmin.payload)
                }
                else{
                    this.statusLoginAdmin=false
                }
        },
         logout(){
            this.dataToken=null,
            localStorage.removeItem('tokenApi')
        }
    }
})

