let $email = $('#email')
let $password = $('#password')
const url = 'http://localhost:3000'

const login= async ()=>{
    let email = $email[0].value
    let password = $password[0].value

    let body = {
        email,
        password
    }
    $.post(`${url}/auth/login`,body,
            function(data){
                sessionStorage.auth = data.access_token
                window.location.href=`./index.html`
            }).fail(
                function(){
                    alert('Usuario ou Senha Incorretos')
            })   
}
