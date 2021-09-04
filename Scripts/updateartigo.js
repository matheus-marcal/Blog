let $titulo = $('#titulo')
let $categoria = $('#Categoria')
let $titulo_pag = $('#titulo_pag')
let $conteudo = $('#conteudo')
let $bnt = $('#bnt')
const url_upt= 'http://localhost:3000'



let id = window.location.search.substring(1,window.location.search.length)

var oReq3 = new XMLHttpRequest();
        oReq3.open("GET",`${url_upt}/artigo/id/${id}`)
        oReq3.setRequestHeader('Authorization',`Bearer ${sessionStorage.auth}`)
        oReq3.onreadystatechange = () =>{
            console.log(oReq3)
            if (oReq3.readyState === 4 && oReq3.status === 200) {
                console.log("entrei")
                artigo = JSON.parse(oReq3.response)
                $($titulo)[0].value = artigo.Title
                $($conteudo)[0].value = artigo.Text
                $($categoria)[0].value = artigo.Categoria
            
            }
            else if(oReq3.readyState === 4 && oReq3.status !== 200){
                alert('erro')
            }
        }


if(id){
    $($titulo_pag).text('Atualizar Artigo')
    $($bnt).text('Atualizar')
    oReq3.send()
}else{
    $($titulo_pag).text('Criar Artigo')
    $($bnt).text('Criar')
}
let artigo

$( document ).ready(function() {
    if(!sessionStorage.auth)
    redirect('Home')
});