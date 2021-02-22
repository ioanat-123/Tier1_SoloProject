function validateForm() {
	var a = document.getElementById("name").value;
	var b = document.getElementById("phone").value;
	var c = document.getElementById("message").value;
	
	if (a == null || a == "", b == null || b == "", c == null || c == "") {
		alert("Please fill in all the required fields");
	} 
	else {
		alert("Thank you " + a + " we will get back to you shortly!");
	}	
}

