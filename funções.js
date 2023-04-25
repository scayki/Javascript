function parimp(n){
    if (n%2==0){
        return 'par'
    }
    else{
        return 'impar'
    }
}
function oi(){
    a = fatorial(5)
    b = document.getElementById('oi')
    b.innerHTML = `${a}`
}
function factorial(n){
    fat = 1
    for (c=n;c>1;c--){
        fat *= c
    }
    return fat
}
function fatorial(n){
    if (n==1){
        return 1
    }
    else{
        return n * fatorial(n-1)
    }
}