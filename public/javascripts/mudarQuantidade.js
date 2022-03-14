function decrementa(){
    let quantidade = document.getElementById("quantidadeItens").value
    quantidade = quantidade -1
    document.getElementById("quantidadeItens").value = quantidade
}

function incrementa(){
    let quantidade = document.getElementById("quantidadeItens").value
    quantidade = quantidade +1
    document.getElementById("quantidadeItens").innerHTML.value = quantidade
}