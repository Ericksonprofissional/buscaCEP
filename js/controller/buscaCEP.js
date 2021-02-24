import {services} from '../service.js';

const form = document.querySelector("form");

function obterInfoForm() {
    return {
        uf: form.uf.value,
        cidade: form.cidade.value,
        rua: form.rua.value
    };
}

const tbody = document.querySelector('tbody');

var buscaCep = document.querySelector(".find");
var limpaResultado = document.querySelector(".clear");

buscaCep.addEventListener("click", function (event) {
    event.preventDefault();
    if(uf == '' || cidade == '' || rua == ''){
        alert('UF, Cidade e Rua são obrigatorios');
    }else {
    services.liberaLista(obterInfoForm().uf, obterInfoForm().cidade, obterInfoForm().rua)
        .then(data =>{
            data.forEach(element => {
                tbody.appendChild(
                    criaNovaLinha(element.cep, element.uf, element.localidade, element.bairro ,element.logradouro)
                )
                buscaCep.setAttribute('display', 'none');
            })
        });
    }
});

limpaResultado.addEventListener("click", evento =>{
    window.location.href = ''
})

const criaNovaLinha = (cep, UF, localidade, bairro, rua) => {
    const linhaNovoCliente = document.createElement('tr');
    const conteudo =`
        <td class="td" data-td>
            UF: ${UF}<br>
            CEP: ${cep}<br>
            CIDADE: ${localidade}<br>
            BAIRRO: ${bairro}<br>
            RUA: ${rua}<br>
        </td>`;
    linhaNovoCliente.innerHTML = conteudo;
    return linhaNovoCliente;
}
