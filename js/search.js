function search(){
	var input = document.getElementsByName("input")[0].value;
	input = input.replace(" ","");
	input = input.toLowerCase();
	reset();
	getPatterns(input);
}

function getPatterns(select){
	var patterns = document.getElementsByClassName("pattern");
	for (var i = patterns.length - 1; i >= 0; i--) {
		var name = patterns[i].getAttribute("name");
		if(!name.includes(select)){
			patterns[i].style.display = "none";
		}
	}
}

function getPatternsSelect(select){
	reset();
	if(select.target.value=="" || select.target.value=="Category All"){
		return;
	}	
	var patterns = document.getElementsByClassName("pattern");
	for (var i = patterns.length - 1; i >= 0; i--) {
		var value = patterns[i].getAttribute("value");
		if(!value.includes(select.target.value)){
			patterns[i].style.display = "none";
		}
	}
}

function reset(){
	var patterns = document.getElementsByClassName("pattern");
	for (var i = patterns.length - 1; i >= 0; i--) {
		patterns[i].style.display = "initial";
	}
}