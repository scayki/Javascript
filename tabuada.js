function tabuada(){
    num = document.getElementById('txtn')
    tabuada = document.getElementById('selectab')
   if (num.value.length == 0){
    window.alert('ERRO!!! Digite um número')
   }
   else{
    number = Number(num.value)
    c = 1
    tabuada.innerHTML = ''
    while (c<=10){
        item = document.createElement('option')
        item.text = `${number} x ${c} = ${number*c}`
        tabuada.appendChild(item)
        c++
    }
   }
    
}