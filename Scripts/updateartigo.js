let $titulo = $('#titulo')[0]
let $categoria = $('#Categoria')[0]
let $titulo_pag = $('#titulo_pag')
let $conteudo = $('#conteudo')[0]
let $bnt = $('#bnt')
const url_upt= 'http://ec2-3-12-73-143.us-east-2.compute.amazonaws.com:3000'

var editor1cfg = {}
	editor1cfg.toolbar = "mytoolbar";
	editor1cfg.toolbar_mytoolbar = "{bold,italic}|{fontsize}|{forecolor,backcolor}|removeformat|{justifyleft,justifycenter,justifyright,justifyfull}"
		+ "#{undo,redo,fullscreenenter,fullscreenexit,togglemore}|removeformat";
	var editor1 = new RichTextEditor("#div_editor1", editor1cfg);

let id = window.location.search.substring(1,window.location.search.length)

var oReq3 = new XMLHttpRequest();
        oReq3.open("GET",`${url_upt}/artigo/id/${id}`)
        oReq3.setRequestHeader('Authorization',`Bearer ${sessionStorage.auth}`)
        oReq3.onreadystatechange = () =>{
            //console.log(oReq3)
            if (oReq3.readyState === 4 && oReq3.status === 200) {
                //console.log("entrei")
                artigo = JSON.parse(oReq3.response)
                editor1.setHTMLCode(artigo.Text)
                $($titulo)[0].value = artigo.Title
                $($categoria)[0].value = artigo.Categoria
            }
            else if(oReq3.readyState === 4 && oReq3.status !== 200){
                alert('erro')
            }
        }


        var CriarRequest = new XMLHttpRequest();
        CriarRequest.open("POST",`${url_upt}/artigo`)
        CriarRequest.setRequestHeader('Authorization',`Bearer ${sessionStorage.auth}`)
        CriarRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        CriarRequest.onreadystatechange = () =>{
            //console.log(CriarRequest)
            if (CriarRequest.readyState === 4 && CriarRequest.status === 201) {
                alert("Criação com Sucesso")
                redirect('Home');
            }
            else if(CriarRequest.readyState === 4 && CriarRequest.status !== 200){
                alert("Criação Falhou")
            }
        }




        var AtualizarRequest = new XMLHttpRequest();
        AtualizarRequest.open("PUT",`${url_upt}/artigo/${id}`)
        AtualizarRequest.setRequestHeader('Authorization',`Bearer ${sessionStorage.auth}`)
        AtualizarRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        AtualizarRequest.onreadystatechange = () =>{
            //console.log(AtualizarRequest)
            if (AtualizarRequest.readyState === 4 && AtualizarRequest.status === 200) {
                alert("Atualização com Sucesso")
                redirect('Home');
            }
            else if(AtualizarRequest.readyState === 4 && AtualizarRequest.status !== 200){
                alert("Atualização Falhou")
            }
        }




if(id){
    $($titulo_pag).text('Atualizar Artigo')
    $($bnt).text('Atualizar')
    $($bnt).attr("onclick",`atualizar()`);
    oReq3.send()
}else{
    $($titulo_pag).text('Criar Artigo')
    $($bnt).text('Criar')
    $($bnt).attr("onclick","criar()");
}

const gerador_body = () =>{
    return {
        "Title":$titulo.value,
        "Text":editor1.getHTMLCode(),
        "Categoria":$categoria.value
    }
}


const criar = () => {
    let body = gerador_body()
    CriarRequest.send(JSON.stringify(body))
}

const atualizar = () => {
    let body = gerador_body()
    AtualizarRequest.send(JSON.stringify(body))
}
let artigo

$( document ).ready(function() {
    if(!sessionStorage.auth)
    redirect('Home')
});