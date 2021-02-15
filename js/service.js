const form = document.querySelector("form");

function obterInfoForm() {
    return {
        uf: form.uf.value,
        cidade: form.cidade.value,
        rua: form.rua.value
    };
}

const tbody = document.querySelector('tbody');
console.log(tbody);

var buscaCep = document.querySelector("button");

buscaCep.addEventListener("click", function (event) {
    event.preventDefault();
    liberaLista()
        .then(data =>{
            data.forEach(element => {
                tbody.appendChild(
                    criaNovaLinha(element.cep, element.uf, element.localidade, element.bairro ,element.logradouro)
                )
            })
    });
    buscaCep.disabled = true;
});

const criaNovaLinha = (cep, UF, localidade, bairro, rua) => {
    const linhaNovoCliente = document.createElement('tr');
    const conteudo =`
        <td class="td" data-td>${cep}</td>
            <td>${UF}</td>
            <td>${localidade}</td>
            <td>${bairro}</td>
            <td>${rua}</td>
            </ul>
        </td>`;
    linhaNovoCliente.innerHTML = conteudo;
    return linhaNovoCliente;
}

const liberaLista = () =>{
    if(obterInfoForm().uf == '' || obterInfoForm().cidade == '' || obterInfoForm().rua == ''){
        alert('UF, Cidade e Rua são obrigatorios');
    }else {
        return fetch(`https://viacep.com.br/ws/${obterInfoForm().uf}/${obterInfoForm().cidade}/${obterInfoForm().rua}/json/`)
        .then( resposta => {
          return resposta.json();
        });
    }
}


    
    
