let itens = []

const buttonAdicionarItem = document.querySelector(".adicionar-item button")
buttonAdicionarItem.addEventListener("click", adicionarNovoItem)

function adicionarNovoItem() {
    const descricao = document.querySelector("#novo-item").value

    if (descricao === "") {
        alert("Digite um item válido!")
        return
    }

    const item = {
        descricao,
        marcado: false
    }

    itens.push(item)

    document.querySelector("#novo-item").value = ""

    mostrarListaAtual()
}

function mostrarListaAtual() {
    const sectionItens = document.querySelector(".itens")

    sectionItens.innerHTML = ""

    itens.sort((itemA, itemB) => Number(itemA.marcado) - Number(itemB.marcado))

    for(let i = 0; i < itens.length; i++) {
        sectionItens.innerHTML = sectionItens.innerHTML + `
            <div class="item">
                <div>
                    <input type="checkbox" id="item-${i}" ${itens[i].marcado === true && "checked"}>

                    <div class="checkbox-customizada" onclick="marcarItem(${i})">
                        <img src="./imagens/checked.svg" alt="checked">
                    </div>

                    <label for="item-${i}" onclick="marcarItem(${i})">${itens[i].descricao}</label>
                </div>

                <button onclick="apagarItem(${i})">
                    <img src="./imagens/trash-icon.svg" alt="ícone do lixo">
                </button>
            </div>
        `
    }
}

function apagarItem(indice) {
    itens.splice(indice, 1)

    mostrarListaAtual()
}

function marcarItem(indice) {
    itens[indice].marcado = !itens[indice].marcado

    mostrarListaAtual()
}