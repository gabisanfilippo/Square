function decrementa(){
    let quantidade = document.getElementById("quantidadeItens").innerHTML.value
    quantidade = quantidade -1
    document.getElementById("quantidadeItens").innerHTML = quantidade
}

function incrementa(){
    let quantidade = document.getElementById("quantidadeItens").innerHTML.value
    quantidade = quantidade +1
    document.getElementById("quantidadeItens").innerHTML = quantidade
}