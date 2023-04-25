function verificar(){
    agora = new Date()
    ano = agora.getFullYear()
    nasc = window.document.getElementById("txtano")
    res = window.document.querySelector("div#res")
    if (nasc.value.length ==0 || nasc.value >ano){
        window.alert("ERRO")
    }
    else {
        sex = window.document.getElementsByName('radsex')
        idade = ano -nasc.value
        gênero = ''
        img = document.createElement('img')
        img.setAttribute('id','foto')
        if (sex[0].checked){
            gênero = 'Homem'
            if (idade>=0 && idade<12){
                //criança
                img.setAttribute('src', 'CriançaM.jpg')
            }
            else if(idade<21){
                //jovem
                img.setAttribute('src','JovemM.jpg')
            }
            else if(idade<50){
                //adulto
                img.setAttribute('src','AdultoM.jpg')
            }
            else{
                //idoso
                img.setAttribute('src', 'IdosoM.jpg')
            }
        }
        else{
            gênero = 'Mulher'
            if (idade>=0 && idade<12){
                //criança
                img.setAttribute('src','criançaF.jpg')
            }
            else if(idade<21){
                //jovem
                img.setAttribute('src','JovemF.jpg')
            }
            else if(idade<50){
                //adulto
                img.setAttribute('src','AdultoF.jpg')
            }
            else{
                //idoso
                img.setAttribute('src','IdosoF.jpg')
            }
        }
        
        res.innerHTML = `Detectamos ${gênero} de ${idade} anos`
        res.appendChild(img)
    }
}