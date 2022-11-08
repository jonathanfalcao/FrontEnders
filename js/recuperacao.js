function validar(){
    var email = document.getElementById("email").value;
    var alert = document.querySelector(".alert");
    var re = /\S+@\S+\.\S+/;

    if(re.test(email) == false){
      alert.style.display = 'block'
      
    }else{
        alert.style.display = 'none'
    }
}

function valida() {
    var email = document.getElementById("email").value;
    var form = document.querySelector('form')
    var sent = document.getElementById('sent')
    var re = /\S+@\S+\.\S+/;
   
     if( re.test(email) == true){
       form.style.display='none'
       sent.style.display ='block'

     } 
  }

  console.log(valida())

