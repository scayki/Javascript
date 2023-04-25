function teste(){
    num = [1,2,4,10,0]
    oi = document.getElementById('oi')
    num.push(0)
    num.sort()
    for (pos=0;pos<num.length;pos++){
        oi.innerHTML += `>${num[pos]}`

    }
    pos = num.indexOf(3)
    if (pos == -1){
        oi.innerHTML += ` o número não foi encontrado`
    }
    else{
        oi.innerHTML += ` O 4 está na posição ${pos}`
    }
    
}