function validate() {
    var password=document.getElementById("password").value

    if(password == "user") {
        alert("hi")
        document.getElementById('msg').innerHTML='Hallo'
    } else {
        alert("Login fehlgeschlagen !")
    }
   }