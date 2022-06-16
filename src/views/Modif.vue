<template>
<div>
    <h1>Modifier le profil de: {{ currentUser }}</h1>
    <form>
        <label v-for="(key,value) in userDatas" :key="value">
            <span>{{value.toUpperCase()}}</span>
            <input type="text" v-bind:value="key"  >
        </label>
        <button>Valider</button>
    </form>
</div>
</template>

<script>
export default {
    name: 'modif',
    data: function() {
        return {
        }
    },  
    props:["id","currentUser"],
    beforeMount() {
        this.userDatas =
        this.$store.state.users[
        this.$store.state.users.findIndex((v) => v.id == this.id)
        ];
    }
}
</script>

<style scoped>
@media only screen and (min-width: 769px){
    h1{
        text-align: center;
        color: #235F62;
    }
    div{
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    form{
        width:40%;
        padding:1rem;
        background-color: #235f6288;
        color:white;
        font-weight: bold;
        border-radius: 45px;
        margin-bottom: 2rem;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    label{
        display:flex;
        padding: 0.5rem;
        flex-direction: column;
        align-items: center;
        width: 90%; 
    }
    input{
        width:70%;
        text-align: center;
    }
    button{
        background-color: #235F62; 
        color:white;
        font-weight: bold;
        font-size: 20px;
        padding: 10px;
        width: 40%;
        border-radius: 35px;
    }
    label:first-child{
        display: none;
    }
}
@media only screen and (min-width: 426px)  and (max-width: 768px){
    h1{
        text-align: center;
        color: #235F62;
    }
    div{
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    form{
        width:70%;
        padding:1rem;
        background-color: #235f6288;
        color:white;
        font-weight: bold;
        border-radius: 45px;
        margin-bottom: 2rem;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    label{
        display:flex;
        padding: 0.5rem;
        flex-direction: column;
        align-items: center;
        width: 90%; 
    }
    input{
        width:70%;
        text-align: center;
    }
    button{
        background-color: #235F62; 
        color:white;
        font-weight: bold;
        font-size: 20px;
        padding: 10px;
        width: 40%;
        border-radius: 35px;
    }
    label:first-child{
        display: none;
    }
}
@media only screen and (max-width: 425px){
    h1{
        text-align: center;
        color: #235F62;
        font-size: 1.5rem
    }
    div{
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    form{
        width:80%;
        padding:1rem;
        background-color: #235f6288;
        color:white;
        font-weight: bold;
        border-radius: 45px;
        margin-bottom: 2rem;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    label{
        display:flex;
        padding: 0.5rem;
        flex-direction: column;
        align-items: center;
        width: 90%; 
    }
    input{
        width:90%;
        text-align: center;
    }
    button{
        background-color: #235F62; 
        color:white;
        font-weight: bold;
        font-size: 20px;
        padding: 10px;
        width: 40%;
        border-radius: 35px;
    }
    label:first-child{
        display: none;
    }
}
</style>