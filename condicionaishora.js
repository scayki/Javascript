agora = new Date()
hora = agora.getHours()
console.log(`Agora são ${hora}`)
if (hora<12){
    console.log("bom dia")
} 
else if(hora>=18){
    console.log("boa tarde")
}
else {
    console.log("boa noite")
}