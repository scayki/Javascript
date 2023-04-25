
function carregar(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var agora = new Date()
    hora = agora.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >=0 && hora<12){
        img.src = "fotos/manhã.png"
        document.body.style.background = "#f0ab50"
    }
    else if (hora>=12 && hora<=18){
        img.src = "fotos/tarde.png"
        document.body.style.background = "#a17e13"
    }
    else{
        img.src = "fotos/noite.png"
        document.body.style.background = "#1a0c14"
    }
    
    
}