let $entrar = $('#login')[0]
let $sair = $('#sair')[0]
let $comprimento = $('#comprimento')[0]

const url_redirect = 'http://localhost:3000'

let logado = false


const redirect = (tipo,id)=>{
    if(tipo=="Artigo")
    window.location.href=`./artigo.html?${id}`
    else if(tipo=="Categoria")
    window.location.href=`./categoria.html?${id}`
    else if(tipo=="Home")
    window.location.href=`./index.html`
    else if(tipo=="Login")
    window.location.href=`./login.html`
    else if(tipo=="Registro")
    window.location.href=`./registrar.html`
    else if(tipo=="Update")
    window.location.href=`./updateartigo.html`      
}

var oReq = new XMLHttpRequest();
        oReq.open("GET",url_redirect)
        oReq.setRequestHeader('Authorization',`Bearer ${sessionStorage.auth}`)
        oReq.onreadystatechange = () =>{
            console.log(oReq)
            if (oReq.readyState === 4 && oReq.status === 200) {
                $($entrar).hide()
                oReq2.send()
            }
            else if(oReq.readyState === 4 && oReq2.status !== 200){
                sessionStorage.user_id=""
                sessionStorage.auth=""
                $($sair).hide()
            }
        }
var oReq2 = new XMLHttpRequest();
        
        oReq2.open("GET",`${url_redirect}/users/${sessionStorage.user_id}`)
        oReq2.setRequestHeader('Authorization',`Bearer ${sessionStorage.auth}`)
        oReq2.setRequestHeader('Accept',`application/json`)
        oReq2.onreadystatechange = () =>{
            console.log(oReq2)
            if (oReq2.readyState === 4 && oReq2.status === 200) {
                let json = JSON.parse(oReq2.response)
                console.log(json)
                $($comprimento).prepend(`<h5 class=" texto categoria">Ola, ${json.username} </h5>` )
                $($comprimento).append(`<button id='sair'class="botao-lateral" onclick="redirect('Update')">Criar Artigo</button>`)
                $($comprimento).append(`<button class="botao-lateral" onclick="redirect('Registro')">Registrar</button>`)
                logado = true;
            }else if(oReq.readyState === 4 && oReq2.status !== 200){
                sessionStorage.user_id=""
                sessionStorage.auth=""
                $($sair).hide()
            }
        }


const verifylogin = async () =>{
    if(!(sessionStorage.auth))
        $($sair).hide()
    else{
        oReq.send()
    }
}

verifylogin()


const sair = () =>{
    sessionStorage.auth=""
    sessionStorage.user_id=""
    window.location.href=``
}