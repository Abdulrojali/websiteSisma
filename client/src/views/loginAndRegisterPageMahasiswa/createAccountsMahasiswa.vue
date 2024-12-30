<template>
    <div class="container">
        <div class="content">
            <i class="fa-solid fa-arrow-left" @click="backLogin"></i>
            <div class="formCreateAccounts">
                <div class="contentHeading">
                    <h1>get ready</h1>
                    <p>create Account mahasiswa now</p>
                </div>
                <div class="dobleInput">
                    <div class="col">
                    <label for="nama">nama</label>
                    <input type="text" v-model="nama">
                </div>                
                <div class="col">
                    <label for="nim">nim</label>
                    <input type="text" v-model="nim">
                </div>
                </div>
                <div class="col">
                    <label for="kelas">kelas</label>
                    <input type="text" v-model="klass">
                </div>
                <div class="col">
                    <label for="username">username</label>
                    <input type="text" v-model="username">
                </div>
                <div class="col">
                    <label for="password">password</label>
                    <input type="password" v-model="password">
                </div>
                <div class="col">
                    <label for="email">email</label>
                    <input type="email" v-model='email'>
                </div>
                <div class="btn">
                    <button @click="handlingcreateAccounts">submit</button>
                </div>
               <p>buat accounts <a href="" @click="goToPageCreateAccountsAdmin">admin</a></p>
            </div>
        </div>
    </div>
</template>
<script>
import {ref} from 'vue'
import {createAccountsMahasiswa} from '../../store/createAccountsStore.js'
import {useRouter} from 'vue-router'
export default{
    setup(){
        const accounstStore=createAccountsMahasiswa()
        const nama =ref('')
        const nim =ref('')
        const username =ref('')
        const klass =ref('')
        const password =ref('')
        const email =ref('')

        const router = useRouter()
        const handlingcreateAccounts=()=>{
            if(!nama || !nim || !username || !klass || !password || !email){
                alert('invalid login')
            }
            else if(nama===''){
                alert('nama belum di isi!!')
            }
            else if(nim===''){
                alert('nim belum di isi!!')
            }            
            else if(username===''){
                alert('username belum di isi!!')
            }         
            else if(klass===''){
                alert('username belum di isi!!')
            }  
             else if(password===''){
                alert('password belum di isi!!')
            }            
            else if(email===''){
                alert('email belum di isi!!')
            }
            else{
                accounstStore.createAccounts(nama,nim,klass,username,password,email)
                setTimeout(() => {
                    if(accounstStore.statusCreateAccounts===true){
                        router.push('/loginMahasiswa')
                    }
                    else{
                        alert('invalid to create Accounts')
                        window.location.reload()
                    }
                }, 1000);
            }
        }
        return{nama,nim,klass,username,password,email,handlingcreateAccounts}
},
    methods:{
        backLogin(){
            this.$router.push('/loginMahasiswa')
        },
        goToPageCreateAccountsAdmin(e){
            e.preventDefault()
            this.$router.push('/createAccountsAdmin')
        }
    }
}
</script>

<style scoped>
*{
    padding:0;
    margin:0;
    box-sizing: border-box;
}
.container{
    width:100%;
    height: 100vh;
    background-image: linear-gradient(to left, rgba(255,0,0,0), blue);
    display: flex;
    justify-content: center;
    align-items: center;
}

.content{
    width: 50%;
    padding: 20px;
    border-radius: 5px;
    border: none;
    background-color: white;
}
.formCreateAccounts{
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}
.dobleInput{
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 8px;
}
.dobleInput input{
    padding: 5px 20px;
    width: 100%;
}
.dobleInput input:last-child{
    width: 98%;
}
.contentHeading h1{
    font-size: 1.5em;
    font-weight: 800;
    text-transform: capitalize;
}
.contentHeading p{
    font-size: .8em;
    color: gray;
}
label{
    font-size: .8em;
}
.col{
    display: flex;
    flex-direction: column;
    gap: 5px;
}
.col input{
    padding: 5px 20px;
    border: none;
    border-bottom: 1px solid gray;
}
textarea{
    height: 80px;
    border: none;
    border-bottom: 1px solid gray;
}
button{
    width: 100%;
    padding: 8px 15px;
    cursor: pointer;
    background-color: blue;
    color: white;
    border: none;
    border-radius: 5px;
}
button:hover{
    opacity: .8;
}
i{
    position: absolute;
    top: 20px;
    left: 30px;
    font-size: 2em;
    color: white;
    cursor: pointer;
}
i:hover{
    opacity: .8;
}
.back{
    display: none;
    width: 100%;
    padding: 8px 15px;
    cursor: pointer;
    background-color: blue;
    color: white;
    border: none;
    border-radius: 5px;
}
.back:hover{
    opacity: .8;
}
@media only screen and (max-width: 768px){
    .container{
        height: 100vh;
        padding: 20px 0;
    }
    i{
        display: none;
    }
    .back{
        display: block;
    }
    .btn{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        justify-content: space-around;
        align-items: center;
        margin-top: 20px;
    }
    .content{
        width: 70%;
    }
    .formCreateAccounts{
        width: 100%;
    }
}
</style>