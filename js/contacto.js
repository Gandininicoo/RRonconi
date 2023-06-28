const buttonForm = document.getElementById('buttonForm')
const response = document.getElementById('Response');

response.addEventListener("keyup", function(){
    if(this.value === "12"){
        console.log(this.value)
        buttonForm.removeAttribute("disabled")
    } else {
        buttonForm.setAttribute("disabled","")
    }
});