// Array contendo os novos aparelhos eletrônicos atualizados
const produtos = [
    {
        id: 1,
        nome: "iPhone 15 Pro Max Ultra",
        codigo: "Código 998A#XP",
        cor: "Cor Titânio Natural",
        preco: 8000,
        qtd: 1,
        imagem: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=150&auto=format&fit=crop&q=60" 
    },
    {
        id: 2,
        nome: "Console PlayStation 5 Slim",
        codigo: "Código 445B#RT",
        cor: "Cor Branco/Preto",
        preco: 4000,
        qtd: 2,
        imagem: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=150&auto=format&fit=crop&q=60"
    },
    {
        id: 3,
        nome: "Notebook Gamer Dell Core i7",
        codigo: "Código 772C#LK",
        cor: "Cor Preto Fosco",
        preco: 6500,
        qtd: 0,
        imagem: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=150&auto=format&fit=crop&q=60"
    }
];

const tableBody = document.getElementById('cart-table-body');
const subtotalDisplay = document.getElementById('subtotal-display');

// Função responsável por desenhar as linhas e atualizar a tabela
function renderCarrinho() {
    tableBody.innerHTML = "";
    let subtotalGeral = 0;

    produtos.forEach((produto, index) => {
        const totalItem = produto.preco * produto.qtd;
        subtotalGeral += totalItem;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${produto.imagem}" alt="${produto.nome}" class="product-img">
            </td>
            <td>
                <div class="product-info">
                    <p class="product-name">${produto.nome}</p>
                    <p class="product-details">${produto.codigo}</p>
                    <p class="product-details">${produto.cor}</p>
                </div>
            </td>
            <td>${produto.preco}</td>
            <td>
                <div class="qty-controls">
                    <button class="btn-qty btn-minus" onclick="alterarQuantidade(${index}, -1)">-</button>
                    <span class="qty-value">${produto.qtd}</span>
                    <button class="btn-qty btn-plus" onclick="alterarQuantidade(${index}, 1)">+</button>
                </div>
            </td>
            <td><strong class="item-total">${totalItem}</strong></td>
        `;
        tableBody.appendChild(row);
    });

    // Atualiza o valor do subtotal na barra cinza inferior
    subtotalDisplay.innerHTML = `🛒 SUBTOTAL: ${subtotalGeral}`;
}

// Função para somar ou subtrair a quantidade sem deixar ficar menor que zero
function alterarQuantidade(index, valor) {
    if (produtos[index].qtd + valor >= 0) {
        produtos[index].qtd += valor;
        renderCarrinho(); // Recarrega os valores atualizados na tela
    }
}

// Executa a função pela primeira vez ao abrir a página
renderCarrinho();