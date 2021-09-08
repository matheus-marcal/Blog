const url = 'http://localhost:3000'
let id = window.location.search.substring(1,window.location.search.length)


const main = async () =>{
    
    //console.log(id)
    if(!id)
        window.location.href=`./index.html`
    
    let artigo = await $.get(`${url}/artigo/id/${id}`)
    //console.log(artigo)
    if(sessionStorage.auth)
    $('#principal').append(`<div class="card">
                                <div class="container">
                                    <h3 class="titulo">${artigo.Title}</h3>
                                    <h5 id="artigo"class="texto">${artigo.Text}
                                    </h5>
                                    <button id="editar" class="read-more" onclick="redirect('Update',${artigo.id})">EDITAR</button>
                                    <button id="excluir" class="read-more" onclick="excluir(${artigo.id})">EXCLUIR</button>
                                </div>
                            </div>`)
    else
    $('#principal').append(`<div class="card">
                                <div class="container">
                                    <h3 class="titulo">${artigo.Title}</h3>
                                    <h5 id="artigo"class="texto">${artigo.Text}
                                    </h5>
                                </div>
                            </div>`)

}
var ApagarRequest = new XMLHttpRequest();
    ApagarRequest.open("DELETE",`${url}/artigo/${id}`)
    ApagarRequest.setRequestHeader('Authorization',`Bearer ${sessionStorage.auth}`)
    ApagarRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    ApagarRequest.onreadystatechange = () =>{
            //console.log(ApagarRequest)
            if (ApagarRequest.readyState === 4 && ApagarRequest.status === 200) {
                alert("Excluido com Sucesso")
                redirect('Home');
            }
            else if(ApagarRequest.readyState === 4 && ApagarRequest.status !== 200){
                alert("Excluido Falhou")
            }
        }
const excluir = (id) =>{
    
    ApagarRequest.send()

}


main()