let form=document.querySelector('form')
form.addEventListener('submit', function(event){
    event.preventDefault();
    console.log('envoi du form detecté')
    let email = document.querySelector('#email')

    if(email.value ==''){
        console.log("invalide")
        email.classList.add('invalide')
    }else{
        email.classList.add('success')
    }
    let pseudo = document.querySelector('#pseudo')
    if(pseudo.value.length < 6 || pseudo.value ==''){

        pseudo.classList.add('invalide')
        pseudo.classList.remove('success')
    }else{
        pseudo.classList.add('success')
        pseudo.classList.remove('invalide')
    }

    let mdp = document.querySelector("#mdp")
    
    let passCheck = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$");
    if(mdp.value.length < 10 || passCheck.test(mdp.value || mdp.value =='') == false){

        mdp.classList.add('invalide')
        mdp.classList.remove('success')
    }else{
        mdp.classList.add('success')
        mdp.classList.remove('invalide')
    }
})
let title = document.querySelector("#ouioui")
let body = document.querySelector("body")

title.addEventListener("click", function(){
    body.classList.toggle('dark_mode')
})