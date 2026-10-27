//your JS code here. If required.
let form = document.querySelector("form");

form.addEventListener("submit" ,function(value){
value.preventDefault();

	const age = document.getElementById("age").value;
	const name = document.getElementById("name").value;
	const submit = document.getElementById("btn");

	if(age=="" || name==""){
	alert("Please enter valid details.");
	return;
	}

	submit.disabled=true;

	const ageCheck = new Promise((resolve,reject)=>{
	setTimeout(()=>{
	if(age>=18){
		resolve(`Welcome ${name}. You can vote`)
	}
	else{
		reject(`Oh sorry ${name}. You aren't old enough`)
	}		
		
	},4000)

		
	})	

	ageCheck.then((msg)=>{
		alert(msg);
	}).catch((err)=>{
		alert(err)
	}).finally(()=>{
		submit.disabled=false;
	}
		)
	
})