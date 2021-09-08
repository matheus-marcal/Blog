let $username = $('#username')[0]
let $email = $('#email')[0]
let $password = $('#password')[0]

const url_registro = 'http://localhost:3000'

var oReq4 = new XMLHttpRequest();
        oReq4.open("POST",`${url_registro}/users`)
        oReq4.setRequestHeader('Authorization',`Bearer ${sessionStorage.auth}`)
        oReq4.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        oReq4.onreadystatechange = () =>{
            //console.log(oReq)
            if (oReq4.readyState === 4 && oReq4.status === 201) {
                alert("Criação com Sucesso")
                redirect('Home');
            }
            else if(oReq4.readyState === 4 && oReq4.status !== 200){
                alert("Criação Falhou")
            }
        }



const registrar = () =>{
    let username = $username.value
    let email = $email.value
    let password = $password.value
    let body = {
        "username":username,
        "email":email,
        "password":password
    }
    if(username && email && password){
        //console.log(body)
        oReq4.send(JSON.stringify(body))

    }else{
        alert("Existe algum campo não preenchido")
    }
}