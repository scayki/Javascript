agora = new Date()
weekday = agora.getDay()
console.log(weekday)
switch(weekday){
    case 0:
        console.log("domingo")
        break
    case 1:
        console.log("Segunda")
        break
    case 2:
        console.log("Terça")
        break
    case 3:
        console.log("Quarta")
    case 4:
        console.log("Quinta")
    case 5:
        console.log("Sexta")
    case 6:
        console.log("sábado")
    default:
        console.log("Dia inválido")
        break
}