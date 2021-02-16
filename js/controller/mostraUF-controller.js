import {services} from '../service.js';

const selectUF = document.querySelector("#uf");

const criaOptions = (uf) => {
    const criaNovaLinha = document.createElement('option')

    criaNovaLinha.innerHTML = uf 


    return criaNovaLinha;
}

services.mostraUF().then( UF => {
    UF.forEach(element => {
        selectUF.appendChild(criaOptions(element.sigla))
    })
})

