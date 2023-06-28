/*VEHICULOS*/
const Cultivos = document.getElementById("CultivosCaracteristicas")
const Ganado = document.getElementById("GanadoCaracteristicas")
const Empleados = document.getElementById("EmpleadosCaracteristicas")
const Patrimonio = document.getElementById("PatrimonioCaracteristicas")
const CultivosBtn = document.getElementById ("CultivosBtn")
const motocicletaBtn = document.getElementById ("MotocicletaBtn")
const EmpleadosBtn = document.getElementById ("EmpleadosBtn")
const PatrimonioBtn = document.getElementById ("PatrimonioBtn")
const portadaProductos = document.getElementById("PortadaProductos")

CultivosBtn.onclick=()=>{
    Ganado.classList.remove("ulProductosShow")
    Empleados.classList.remove("ulProductosShow")
    Patrimonio.classList.remove("ulProductosShow")
    Cultivos.classList.add("ulProductosShow")
    reescribirPortada("Coberturas disponibles para tus cultivos.")
}
GanadoBtn.onclick=()=>{
    Cultivos.classList.remove("ulProductosShow")
    Empleados.classList.remove("ulProductosShow")
    Patrimonio.classList.remove("ulProductosShow")
    Ganado.classList.add("ulProductosShow")
    reescribirPortada("Coberturas disponibles para Ganado dependiendo el plan.")
}
EmpleadosBtn.onclick=()=>{
    Cultivos.classList.remove("ulProductosShow")
    Ganado.classList.remove("ulProductosShow")
    Patrimonio.classList.remove("ulProductosShow")
    Empleados.classList.add("ulProductosShow")
    reescribirPortada("Coberturas para tu embarcacion dependiento el plan.")
}
PatrimonioBtn.onclick=()=>{
    Cultivos.classList.remove("ulProductosShow")
    Ganado.classList.remove("ulProductosShow")
    Empleados.classList.remove("ulProductosShow")
    Patrimonio.classList.add("ulProductosShow")
    reescribirPortada("Coberturas disponibles para el cuidado de los bienes que forman parte de tu labor diario.")
}
function reescribirPortada(params){
    console.log(portadaProductos)
    portadaProductos.innerText=params
}
