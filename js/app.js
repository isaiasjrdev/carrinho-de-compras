function adicionar() {
   // recuperar os valores do produto, quantidade e valor

   let produto = document.querySelector('#produto').value;
   let nomeProduto = produto.split('-')[0];
   let valorUnitario = produto.split('R$')[1];
   let quantidade = document.querySelector('#quantidade');

   alert(nomeProduto)
   alert(valorUnitario)
   alert(quantidade)
   let preco = quantidade.value * valorUnitario;
   alert(preco);
   // calcular o preço, o subtotal
   // adicionar no carrinho
   // atualizar o valor total da compra

}

function limpar() {
   
}