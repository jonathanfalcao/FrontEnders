function validar(){
    var email = document.getElementById("email");

    if (email.value == ""){
        alert("E-mail não informado");
        email.focus();
        return;
    }
    alert("Mensagem Enviada");
}
