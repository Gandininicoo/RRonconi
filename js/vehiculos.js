/*VEHICULOS*/
const automotor = document.getElementById("AutomotorCaracteristicas")
const motocicletas = document.getElementById("MotocicletasCaracteristicas")
const nautica = document.getElementById("NauticaCaracteristicas")
const bicicletas = document.getElementById("BicicletasCaracteristicas")
const automotorBtn = document.getElementById ("AutomotorBtn")
const motocicletaBtn = document.getElementById ("MotocicletaBtn")
const nauticaBtn = document.getElementById ("NauticaBtn")
const bicicletaBtn = document.getElementById ("BicicletaBtn")
const portadaProductos = document.getElementById("PortadaProductos")

automotorBtn.onclick=()=>{
    motocicletas.classList.remove("ulProductosShow")
    nautica.classList.remove("ulProductosShow")
    bicicletas.classList.remove("ulProductosShow")
    automotor.classList.add("ulProductosShow")
    reescribirPortada("Podes cubrir tus automotres con estas coberturas dependiendo el plan.")
}
motocicletaBtn.onclick=()=>{
    automotor.classList.remove("ulProductosShow")
    nautica.classList.remove("ulProductosShow")
    bicicletas.classList.remove("ulProductosShow")
    motocicletas.classList.add("ulProductosShow")
    reescribirPortada("Coberturas disponibles para motocicletas dependiendo el plan.")
}
nauticaBtn.onclick=()=>{
    automotor.classList.remove("ulProductosShow")
    motocicletas.classList.remove("ulProductosShow")
    bicicletas.classList.remove("ulProductosShow")
    nautica.classList.add("ulProductosShow")
    reescribirPortada("Coberturas para tu embarcacion dependiento el plan.")
}
bicicletaBtn.onclick=()=>{
    automotor.classList.remove("ulProductosShow")
    motocicletas.classList.remove("ulProductosShow")
    nautica.classList.remove("ulProductosShow")
    bicicletas.classList.add("ulProductosShow")
    reescribirPortada("Bicicletas, monopatines y otros vehiculos.")
}
function reescribirPortada(params){
    console.log(portadaProductos)
    portadaProductos.innerText=params
}
