var xmlhttp = createRequestObject();
function createRequestObject() {
	var ro;
	var browser = navigator.appName;
	if(browser == "Microsoft Internet Explorer"){
		ro = new ActiveXObject("Microsoft.XMLHTTP");
	}else{
		ro = new XMLHttpRequest();
	}
	return ro;
}

function myFunction() {

	var url='./ProgramPHP/edu.php';
	xmlhttp.open("GET", url);

	xmlhttp.onreadystatechange = function() {
		if ( xmlhttp.readyState == 4 && xmlhttp.status == 200 ) {
			obj.innerHTML = xmlhttp.responseText;
		} else {
			document.getElementById("content").innerHTML = xmlhttp.responseText;
		}
	}
	xmlhttp.send(null);
}
function myFunction2(){
	var url='./ProgramPHP/organisasi.php';
	xmlhttp.open("GET", url);

	xmlhttp.onreadystatechange = function() {
		if ( xmlhttp.readyState == 4 && xmlhttp.status == 200 ) {
			obj.innerHTML = xmlhttp.responseText;
		} else {
			document.getElementById("content").innerHTML = xmlhttp.responseText;
		}
	}
	xmlhttp.send(null);
}
function myFunction3(){
	var url='./ProgramPHP/pengalaman.php';
	xmlhttp.open("GET", url);

	xmlhttp.onreadystatechange = function() {
		if ( xmlhttp.readyState == 4 && xmlhttp.status == 200 ) {
			obj.innerHTML = xmlhttp.responseText;
		} else {
			document.getElementById("content").innerHTML = xmlhttp.responseText;
		}
	}
	xmlhttp.send(null);
}
function myFunction4(){
	var url='./ProgramPHP/skill.php';
	xmlhttp.open("GET", url);

	xmlhttp.onreadystatechange = function() {
		if ( xmlhttp.readyState == 4 && xmlhttp.status == 200 ) {
			obj.innerHTML = xmlhttp.responseText;
		} else {
			document.getElementById("content").innerHTML = xmlhttp.responseText;
		}
	}
	xmlhttp.send(null);
}





