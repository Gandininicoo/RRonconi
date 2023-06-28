/*PERSONAS*/
const Vida = document.getElementById("VidaCaracteristicas")
const Retiro = document.getElementById("RetiroCaracteristicas")
const VidaBtn = document.getElementById ("VidaBtn")
const RetiroBtn = document.getElementById ("RetiroBtn")
const portadaProductos = document.getElementById("PortadaProductos")

console.log
VidaBtn.onclick=()=>{
    Retiro.classList.remove("ulProductosShow")
    Vida.classList.add("ulProductosShow")
    reescribirPortada("Coberturas de Vida.")
}
RetiroBtn.onclick=()=>{
    Vida.classList.remove("ulProductosShow")
    Retiro.classList.add("ulProductosShow")
    reescribirPortada("Plan de retiro hoy, disfrutar mañana.")
}


function reescribirPortada(params){
    console.log(portadaProductos)
    portadaProductos.innerText=params
}
