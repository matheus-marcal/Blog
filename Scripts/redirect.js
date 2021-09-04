let $entrar = $('#login')[0]
let $sair = $('#sair')[0]
const url_redirect = 'http://localhost:3000'



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
    window.location.href=`./registro.html`   
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("error", function(){}, false);

const verifylogin = async () =>{
    const auth = sessionStorage.auth
    if(!auth)
        $($sair).hide()
    else{
        oReq.open("GET",url_redirect)
        oReq.addEventListener("error", Desautorizado, false);
        oReq.addEventListener("load",  validado, false);
        oReq.setRequestHeader('Authorization',`Bearer ${auth}`)
        await oReq.send()
    }

}

const validado = () =>{
    $($entrar).hide()
}
const Desautorizado = () =>{
    sessionStorage.auth=""
        $($sair).hide()
}

verifylogin()

const sair = () =>{
    sessionStorage.auth=""
    window.location.href=``
}