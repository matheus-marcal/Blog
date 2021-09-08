const url = 'http://localhost:3000'

const main = async () =>{
    let id = window.location.search.substring(1,window.location.search.length)
    //console.log(id)
    if(!id)
        window.location.href=`./index.html`
    
    let artigos = await $.get(`${url}/artigo/${id}`)
    if(artigos.length > 5)
            tam_max= 5;
            else
            tam_max = artigos.length;
        $('#principal').append(`<div class="card">
            <div class="container">
                <h3 class="titulo">${id}</h3>
            </div>
        </div>`)


        for(i=1; i<=tam_max;i++){
            $('#principal').append(`<div class="card">
                                        <div class="container">
                                            <h3 class="titulo">${artigos[artigos.length-i].Title}</h3>
                                            <h5 class="texto">${artigos[artigos.length-i].Text}
                                            </h5>
                                            <h5 class="tres-pontos">. . .</h5>
                                            <button class="read-more" onclick="redirect('Artigo',${artigos[artigos.length-i].id})">LER MAIS</button>
                                        </div>
                                    </div>`)
        }

}

main()