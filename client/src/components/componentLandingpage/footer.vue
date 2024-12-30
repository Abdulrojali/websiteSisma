<template>
    <div class="footer">
        <div class="contentFooter">
            <div class="headingFooter" v-for="(data,index) in heading" :key='index'>
                <img v-lazy="data.logoSima" alt="">
                <h1>{{ data.headingContent }}</h1>
            </div>
            <div class="submenuContent">
                <div class="content1">
                    <div class="col">
                        <h2>About</h2>
                        <ul>
                            <li>personality</li>
                            <li>judul</li>
                            <li>teks</li>
                        </ul>
                    </div>
                    <div class="col">
                        <h2>menu</h2>
                        <ul>
                            <li>buat surat</li>
                            <li>lihat surat</li>
                            <li>download</li>
                            <li>pengajuan</li>
                        </ul>
                    </div>
                    <div class="col">
                        <h2>pages</h2>
                        <ul>
                            <li>landing page</li>
                            <li>login</li>
                            <li>create Accounts</li>
                            <li>dashboard</li>
                        </ul>
                    </div>
                </div>
                <div class="content2">
                    <h1>sosial media</h1>
                    <p>follow us sosial media to find latest updates on our progress</p>
                    <ul>
                        <li
                        v-for="(data,index) in pathurl "
                        :key="index">
                    <i :class="`${data.url}`"></i>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="submenuContent2">
                <p>copyright 2020 sisma. All right reserved</p>
                <ul>
                    <li>terms of service</li>
                    <li>privacy policy</li>
                    <li>security</li>
                </ul>
                <p>english</p>
            </div>
    </div>
</template>

<script>
import logo from '../../assets/sima.png'
export default{
    data(){
        return{
            heading:[
                {headingContent:'Sisma',logoSima:logo}
            ],
            pathurl:[
                {url:'fa-brands fa-twitter'},
                {url:'fa-brands fa-facebook'},
                {url:'fa-brands fa-instagram'},
                {url:'fa-brands fa-telegram'},
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
.footer{
    width: 100%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
}
.contentFooter{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.headingFooter{
    display: flex;
    gap: 10px;
    padding: 0 25px
}
.headingFooter img{
    display: block;
    width: 50px;
    height: 50px;
    box-shadow: 0 0 .9px .9px gray;
}
.headingFooter img:hover{
    display: block;
    width: 50px;
    height: 50px;
    box-shadow: 0 0 .9em .9em gray;
}
.heading h2{
    font-size: 1.5em;
    font-weight: 650;
}
.submenuContent{
    width: 100%;
    display: grid;
    grid-template-columns: 65% auto;
    grid-gap: 10px;
    padding: 20px;
}
.content1{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.col{
    display: flex;
    flex-direction: column;
    gap: 30px;
}
.col h1,.content2 h2{
    margin-bottom: 15px;
    font-size: 1.3em;
    font-weight: 900
}
.col ul,.content2 p{
    list-style-type: none;
    font-size: .8em;
    font-weight: 300;
}
.col ul{
    display: flex;
    flex-direction: column;
    gap:15px;
}
.content2 ul{
    margin-top: 30px;
    margin-top: 15px;
    display:flex;
    justify-content: space-around;
    list-style-type: none;
    font-size: 1.1em;
}
.submenuContent{
    border-bottom: 1px solid gray;
}
.submenuContent2{
    margin-top: 20px;
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: .9em;
}
.submenuContent2 ul{
    display:flex;
    gap: 25px;
    list-style-type: none;
}
img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    box-shadow: 0 0 .8px .8px gray;
}
@media only screen and (max-width: 768px){
    .footer{
        height: 100%;
        padding: 20px 0;
    }
    .submenuContent2{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
}
</style>