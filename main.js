var objPeople = [
	{ // Object @ 0 index
		username: "a",
		password: "b"
	},
	{ // Object @ 1 index
		username: "matt",
		password: "academy"
	},
	{ // Object @ 2 index
		username: "chris",
		password: "forever"
	}

]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeople[i].username && password == objPeople[i].password) {
			alert("Login erfolgreich")
			


			// stop the function if this is found to be true
			return
		}
	}
		alert("Login fehlgeschlagen !")
}