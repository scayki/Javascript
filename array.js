num = document.querySelector('input#val')
lista = document.querySelector('select#lista')
res = document.getElementById('res')
array = []


function isNumero(n){
    if (Number(n)>=1 && Number(n)<=100 ){
        return true
    }
    else{
        return false
    }
}
function inLista(n, array){
    if (array.indexOf(Number(n)) != -1 ){
        return true
    }
    else{
        return false
    }
}
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, array)){
        array.push(Number(num.value))
        item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }
    else{
        window.alert('ERRO!!!')
    }
    num.value = '' /* apaga o valor da caixa de texto após ser digitado*/
    num.focus()  /* após o valor ser adicionado e apagado o ponteiro do mouse continuará na caixa de texto para não precisar clicar novamente*/
}


function finalizar(){
    if(array.length == 0){
        window.alert('não foi digitado valor algum')
    }
    else{
        totelemen = array.length
        res.innerHTML = ''
        res.innerHTML += ` <p> ao todo temos ${totelemen} números cadastrados</p>`
        maior = array[0]
        menor = array[0]
        media = 0
        soma = 0
        for(pos in array){
            if(array[pos]>maior){
                maior = array[pos]
            }
            if (array[pos]<menor){
                menor = array[pos]
            }
        }
        res.innerHTML += `<p>O maior é ${maior} e o menor é ${menor}</p>`
    }
    for (pos in array){
        soma+= array[pos]
        media = soma/totelemen
    }
    res.innerHTML += `A soma dos valores é ${soma}`
    res.innerHTML += ` A média dos valores é ${media}`
}

