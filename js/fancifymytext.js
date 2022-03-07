function alertPopUp(){
	alert("Hello, World!");
}

function increaseFontSize(){
	document.getElementById("myText").style.fontSize="24pt";
}

function addStyle(){
	var elem=document.getElementById("myText");
	elem.style.fontWeight="bold"
	elem.style.color="blue"
	elem.style.textDecoration="underline"
	//elem.setAttribute("style","font-weight: bold;color: blue; text-decoration: underline")
}

function removeStyle(){
	var elem=document.getElementById("myText");
	elem.style.fontWeight="normal"
	elem.style.color="black"
	elem.style.textDecoration="none"
}

function moo(){
	var str = document.getElementById("myText").value;
	var parts = str.split(".");  
	str = parts.join("-Moo");   
	document.getElementById("myText").value=str;
}