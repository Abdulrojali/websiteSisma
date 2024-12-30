<template>
    <div class="loginContainer">
        <div class="loginContent">
            <div class="formLogin">
                <div class="contentHeading">
                    <h1 class="heading">Get Ready</h1>
                    <p>login to your admin account now</p>
                </div>
                <div class="contentLogin">
                <input type="text" placeholder="username" v-model="username">
                <input type="password" placeholder="password" v-model="password">
                    <button @click="handlerLogin">login</button>
                    <p class="tagCreateAccounts">belum punya account? <a @click="goCreateAccount" href="">create account</a></p>
                    <p class="tagCreateAccounts">login sebagai  <a href="" @click="toLoginMahasiswa">mahasiswa</a></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import {loginAccountsAdmin} from '../../store/userAuthStore'
import {useRouter} from 'vue-router'
export default{
    setup(){
        const loginAcconts =loginAccountsAdmin()
        const username =ref("")
        const password =ref("")
        const router=useRouter()
           const handlerLogin = ()=>{
            if(username,password){
                loginAcconts.loginAuthAdmin(username,password)
                setTimeout(() => {
                    if(loginAcconts.statusLoginAdmin==true){
                        if(loginAcconts.dataToken){
                            localStorage.setItem('tokenApi',loginAcconts.dataToken)
                            router.push('/dashboardAdmin/preview')
                        }
                        else{
                            alert('invalid login not found token')
                            window.location.reload()
                        }
                    }
                else{
                    alert('invalid login')
                    console.log(loginAcconts.statusLoginAdmin)
                //  window.location.reload()
                }  
                }, 500);
            }
            else if(username==='' && password){
                alert('username belum diisi')
            }
            else if(username && password===''){
                alert('password belum diisi')
            }
            else{
                alert('tolong isi username dan password')
                window.location.reload()
            }
        }
        return{loginAcconts,handlerLogin,username,password}
    },
    methods:{
        goCreateAccount(e){
            e.preventDefault()
            this.$router.push('/createAccountsMahasiswa')
        },
        toLoginMahasiswa(e){
            e.preventDefault()
            this.$router.push('/loginMahasiswa')
        }
    }
}
</script>

<style>
*{
    padding:0;
    margin: 0;
    box-sizing: border-box;
}
.loginContainer{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(to left, rgba(255,0,0,0), blue);
}
.loginContent{
    width: 40%;
    height: 400px;
    display: grid;
    /* grid-template-columns: auto 70%; */
    border-radius: 5px;
    border: 1px solid black;
    border: none;
}
.contentHeading{
    display: flex;
    flex-direction: column;
    gap: 5px;
    color: rgb(32, 29, 29);
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
.contentLogin,.formLogin{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    background-color: white;
    padding: 10px
}
.contentLogin input{
    width: 100%;
    border-radius: 5px;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-bottom: 1px solid gray;
}
.contentLogin button{
    width: 100%;
    padding: 8px 15px;
    cursor: pointer;
    background-color: blue;
    color: white;
    border: none;
    border-radius: 5px;
}
.contentLogin button:hover{
    opacity: .8;
}
.img{
    display:block;
    width: 100%;
    height: 400px;
    object-fit:fill;
}
.tagCreateAccounts{
    font-size: .8em;
    font-weight: 300;
    text-transform: capitalize;
    margin-top: 20px;
}
@media only screen and (max-width: 768px){
  .loginContent{
    width: 80%;
  }
  .formLogin{
    width: 100%;
    padding: 20px 50px;
  }
}

</style>