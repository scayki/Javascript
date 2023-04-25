function contar(){
inicio = document.getElementById('ini')
fim = document.getElementById('fim')
passo = document.getElementById('passo')
res = document.querySelector('div#res')

if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    window.alert('ERRO!!!')
}
else{
    res.innerHTML = 'Contando...'
    i = Number(inicio.value)
    f = Number(fim.value)
    p = Number(passo.value)
    if (p<=0){
        window.alert('Passo inválido. considerarei como 1')
        p = 1
    }
    if (i<f){
        for (c=i;c<=f;c+=p){
            res.innerHTML += ` ${c} \u{1F449}`
        }
    }
    else {
        for (c=i;c>=f;c-=p){
            res.innerHTML += ` ${c} \u{1F449}`
    }

    }
    
}

}