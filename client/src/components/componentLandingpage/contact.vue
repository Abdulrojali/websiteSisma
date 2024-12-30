<template>
    <div class="contact" id="contact">
        <div class="contentContact">
            <div class="contentHeading">
                <h1>contact us</h1>
                <p>Email,call,or completed the form to learn how sisma can solve your problem</p>
                <b>sisma@gmail.com</b>
            </div>
            <div class="listContent">
                <div class="col" 
                v-for="(data,index) in listContent" :key="index">
                <h1>{{data.judul}}</h1>
                <p>{{ data.deskripsi }}</p>
                </div>
            </div>
        </div>
        <div class="contentContact2">            
            <div class="formContact">
                <div class="headingForm">
                    <h1>get in touch</h1>
                    <p>you can reach us anytime</p>
                </div>
                <div class="form">
                    <div class="dobleInput">
                    <input type="text" placeholder="firstname">
                    <input type="text" placeholder="lastname">
                </div>
                <input type="text" placeholder="username">
                <input type="email" placeholder="email">
                <textarea name="" id="" placeholder="textcontent"></textarea>
                <button>submit</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            listContent:[
                {judul:'costumers support',deskripsi:'our support team is availabel around the clock to addres any concerns or queries you many have'},
                {judul:'feedback and suggestion',deskripsi:'we value your feedback and are continuously working to improve sisma. your input is curcial in shaping the future of sisma'},
                {judul:'media inquiries',deskripsi:'for media releated questions or press inquires, please contact use in sisma@gmail.com'}
            ]
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
.contact{
    height: 100vh;
    display: grid;
    grid-template-columns: 45% auto;
    grid-gap: 10px;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(to right, rgba(255,0,0,0), blue);
}
.contentContact{
    width:100%;
    display: flex;
    flex-direction: column;
    gap: 25px;
    justify-content: center;
    align-items: center;
}
.contentHeading h1{
    font-size: 2.5em;
    font-weight: 800;
}
.contentHeading p,b{
    font-size: 1em;
    font-weight: 250;
    color: black;
    width: 50%;
}
.contentHeading b{
    margin-top: 20px
}
.listContent{
    width:100%;
    display: grid;
    grid-template-columns:repeat(auto-fill,minmax(180px,1fr));
    grid-gap: 8px;
    padding: 0 10px;
}
.col{
    padding: 10px;
   display: flex;
   flex-direction: column;
   gap: 8px;
}
.col h1{
    font-size: 1.5em;
    font-weight: 650;
}
.col p{
    font-size: .9em;
}
.contentContact2{
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.formContact{
    margin-top: 20px;
    padding: 0 20px;
    background-color: white;
    border-radius: 5px;
    border: none;
}
.headingForm{
    margin-bottom: 20px;
}
.dobleInput{
    display: grid;
    grid-template-columns: 50% 50%;
    width: 100%;
    grid-gap:10px;
}
.form{
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 10px 0;
}
input{
    padding: 10px 20px;
    border: none;
    border-bottom: 1px solid gray;
}
button{
    padding: 6px 6px;
    background-color: blue;
    color: white;
    cursor:pointer;
    border-radius: 5px;
    border: none;
}
textarea{
    padding: 0 20px;
    height: 150px;
    border: none;
    border-bottom: 1px solid gray;
}
@media only screen and (max-width: 768px){
    .contact{
        height: 100%;
        padding: 20px 0;
        display: flex;
        flex-direction: column;
    }
    .contentHeading{
        padding: 5px 15px;
    }
}
@media only screen and (max-width: 900px){
    .contact{
        height: 100%;
        padding: 20px 0;
        display: flex;
        flex-direction: column;
    }
}
</style>