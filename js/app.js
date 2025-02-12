let totalGeral = 0
limpar();

function adicionar() {
   // recuperar os valores do produto, quantidade e valor
   let produto = document.querySelector('#produto').value;
   let nomeProduto = produto.split('-')[0];
   let valorUnitario = produto.split('R$')[1];
   let quantidade = document.querySelector('#quantidade').value;
   // calcular o preço, o subtotal
   let preco = quantidade * valorUnitario;
   let carrinho = document.querySelector('#lista-produtos');
      // adicionar no carrinho
   carrinho.innerHTML = carrinho.innerHTML + `
   <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>
   `
   // atualizar o valor total da compra
   totalGeral = totalGeral + preco;
   let campoTotal = document.querySelector('#valor-total');
   campoTotal.textContent = `R$ ${totalGeral}`;
   document.querySelector('#quantidade').value = 0;
}

function limpar() {
   totalGeral = 0
   document.querySelector('#lista-produtos').innerHTML = '';
   document.querySelector('#valor-total').textContent = 'R$ 0';
}