
  
async function buscarEncomenda(encomenda) {
    const resposta = await fetch('./dados.json');
    const dados = await resposta.json();

    let encontrada = false;

    for (let index = 0; index < dados.encomendas.length; index++) {
        if (dados.encomendas[index].numero == encomenda) {
            encontrada = true;
            colocarDadosNaTela(dados.encomendas[index]);
            break;
        }
    }

    if (!encontrada) {
        document.querySelector(".no-result").innerHTML = "Encomenda não encontrada. Procure Novamente";
        ocultarDadosNaTela();
    } else {
        document.querySelector(".no-result").innerHTML = "";
    }
}

function ocultarDadosNaTela() {
    document.querySelector(".Name").innerHTML = "";
    document.querySelector(".Valor").innerHTML = "";
    document.querySelector(".Data").innerHTML = "";
    document.querySelector(".Entrega").innerHTML = "";
    
    document.querySelector("#infos-1").style.display = "none";
    document.querySelector("#infos-2").style.display = "none";
}

function formatarData(data) {
    const dataObj = new Date(data);
    const dia = dataObj.getDate();
    const mes = dataObj.getMonth() + 1; // meses baseados em zero
    const ano = dataObj.getFullYear();

    return `${dia}/${mes}/${ano}`;
}

function colocarDadosNaTela(dados) {
    document.querySelector(".Name").innerHTML = dados.cliente.id + "-" + dados.cliente.nome;
    document.querySelector(".Valor").innerHTML = "R$" + dados.valor;
    document.querySelector(".Data").innerHTML = formatarData(dados.data);
    document.querySelector(".Entrega").innerHTML = dados.entregue ? "Entregue" : "Entregar";
}

function cliqueiNoBotao() {
    const encomenda = document.querySelector(".input-numero-de-encomenda").value;
    buscarEncomenda(encomenda);
}












