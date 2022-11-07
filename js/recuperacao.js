function validar(){
    var email = document.getElementById("email");
    var alert = document.querySelector(".alert");

    if (email.value == ""){
        alert.style.display='block';
        email.focus();
        return;
    }
}

// function validar(){
//     var email = document.getElementById("email");
//     var form = document.querySelector('form')
//     var sent = document.getElementById('sent')

//    if (email.value == '/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/'){
//   return form.style.display='none';
//    }else if (form.style.display='none'){
//     return sent.style.display='block';
//    }
// }
