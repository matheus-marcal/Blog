/**
  <div class="card">
            <div class="container">
                <h3 class="titulo">${titulo}</h3>
                <h5 class="texto">${texto}
                </h5>
                <h5 class="tres-pontos">. . .</h5>
                <button class="read-more" onclick="redirect(id)">LER MAIS</button>
            </div>
        </div>

 */

const url = 'http://ec2-3-12-73-143.us-east-2.compute.amazonaws.com:3000'


const main = async () =>{
 let tam_max
 let artigos = await $.get(`${url}/artigo`)

 tam_max = artigos.length;

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