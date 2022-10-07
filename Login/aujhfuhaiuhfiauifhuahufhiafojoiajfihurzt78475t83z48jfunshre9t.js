function validate() {
    var password=document.getElementById("password").value

    if(password == "user") {
        document.getElementById('msg').innerHTML='Hallo'
    } else {
        alert("Login fehlgeschlagen !")
    }
   }