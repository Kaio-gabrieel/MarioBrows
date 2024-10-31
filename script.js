
const Form = document.querySelector(".formulario")
const mascara = document.querySelector(".mascara-formulario")


function CliqueiNoButton(){
Form.style.left = "50%"
Form.style.transform = "translateX(-50%)"
mascara.style.visibility = "visible"
}

function CliqueiNaMascara(){
    mascara.style.visibility = " hidden"
    Form.style.transform = "translateX(0)"
    Form.style.left = "-16.5%"
}