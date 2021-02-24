const liberaLista = (uf, cidade, rua) =>{
        return fetch(`https://viacep.com.br/ws/${uf}/${cidade}/${rua}/json/`)
        .then( resposta => {
          return resposta.json();
        });
}

const mostraUF = () =>{
    return fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/`)
    .then(resposta => {
        return resposta.json();
    })
}

export const services = {
    liberaLista,
    mostraUF
}
    
