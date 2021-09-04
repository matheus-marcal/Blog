const url = 'http://localhost:3000'

const main = async () =>{
    let id = window.location.search.substring(1,window.location.search.length)
    console.log(id)
    if(!id)
        window.location.href=`./index.html`
    
    let artigo = await $.get(`${url}/artigo/id/${id}`)
    console.log(artigo)
    $('#principal').append(`<div class="card">
                                <div class="container">
                                    <h3 class="titulo">${artigo.Title}</h3>
                                    <h5 id="artigo"class="texto">${artigo.Text}
                                    </h5>
                                </div>
                            </div>`)

}

main()