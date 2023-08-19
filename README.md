Consulta Encomenda

Deploy: https://annebcandrade.github.io/ConsultaEncomenda/

Projeto desenvolvido baseado em um arquivo.zip que foi enviado à autora como teste do processo seletivo para a vaga de Desenvolvedor(a) Front-end JR. da empresa NitroNews.
Tecnologias utilizadas: HTML, CSS, JavaScript. Aplicados conceitos de Api e Json, functions,length, seletores como QuerySelector.

Ao abrir o deploy o usuário tem a possibilidade de pesquisar por um valor de encomenda, sendo 10 valores em array, os quais possuem dados de NOME, VALOR,ENTREGA, DATA DO PEDIDO(dentro do nome existe o cliente e seu ID). 

Os valores que mostram dados consumidos do json são: QWE-67Y / QWE-72Y / RTY-42Z / UTR-43Y / UTR-42Y / QWE-65Z / YODA-67Y / YODA-83Y / LKS-81Y /nQWE-12Y . Disponibilizando-os para o usuário que quiser testar a aplicação.
Qualquer valor colocado no input que não sejam esses que foram dados, a aplicação retorna um alerta de "Encomenda não Encontrada."

Existe um break que faz com que a aplicação após o usuário tentar um dado falso(que não existe entre os 10 valores informados} pare e só volte a funcionar quando a página for recarregada,
Foi pensado em adiconar um botão no HTML para Reiniciar a aplicação quando o usuário apertasse esse botão e no script adicionaria a função descrita abaixo: 

*// Função para reiniciar a aplicação*

*function reiniciarAplicacao() {
    document.querySelector(".input-numero-de-encomenda").value = ""; 
    document.querySelector(".no-result").innerHTML = ""; 
    ocultarDadosNaTela(); // Oculta os dados exibidos
    document.querySelector(".input-numero-de-encomenda").focus(); 
}*

mas, como não foi pedido no teste, tentei ser o mais exata possível quanto á interface e também as funcionalidades da aplicação. 

Aplicação também responsiva, se adapta a diferentes tamanhos de telas.




