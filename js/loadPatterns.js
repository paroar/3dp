var array = JSON.parse(jsonString);
var arrayIndex = JSON.parse(jsonStringIndex);

function orderByLateDate(){
	array.sort(function(a,b){
		if(a.date.year>b.date.year){
			return -1;
		}else if(a.date.year<b.date.year){
			return 1;
		}else if(a.date.month>b.date.month){
			return -1;
		}else if(a.date.month<b.date.month){
			return 1;
		}else{
			return 0;
		}
	});
}

function orderByDownloads(){
	array.sort(function(a,b){
		return b.downloads-a.downloads;
	});
}

function loadPatterns(num,select){
	if(select=="recent"){
		orderByLateDate();
	}else{
		orderByDownloads();
	}
	for (var i = num-1; i >= 0; i--) {
		var div = document.createElement("div");
		div.setAttribute("id","pattern");
		div.setAttribute("class","pattern");
		div.setAttribute("onclick","createCookie(event)")
		var value = array[i]._category;
		div.setAttribute("value",value);
		var title = array[i].title.replace(" ","");
		title = title.toLowerCase();
		div.setAttribute("name",title);

		var divImg = document.createElement("div");
		var aImg = document.createElement("a");
		var img = document.createElement("img");
		aImg.setAttribute("href","pattern.html");
		img.setAttribute("value",array[i].title);
		img.setAttribute("src",array[i].img);
		divImg.appendChild(aImg);
		aImg.appendChild(img);

		var divTitle = document.createElement("div");
		var aImg = document.createElement("a");
		divTitle.appendChild(aImg);
		aImg.innerHTML = array[i].title;
		
		div.appendChild(divImg);
		div.appendChild(divTitle);

		var myDiv = document.getElementById(select);
		myDiv.appendChild(div);
 	}
}

function loadPatternsIndex(num,select){
	if(select=="recent"){
		orderByLateDate();
	}else{
		orderByDownloads();
	}
	for (var i = num-1; i >= 0; i--) {
		var div = document.createElement("div");
		div.setAttribute("id","pattern");
		div.setAttribute("class","pattern");
		div.setAttribute("onclick","createCookie(event)")
		var value = arrayIndex[i]._category;
		div.setAttribute("value",value);
		var title = arrayIndex[i].title.replace(" ","");
		title = title.toLowerCase();
		div.setAttribute("name",title);

		var divImg = document.createElement("div");
		var aImg = document.createElement("a");
		var img = document.createElement("img");
		aImg.setAttribute("href","html/pattern.html");
		img.setAttribute("value",arrayIndex[i].title);
		img.setAttribute("src",arrayIndex[i].img);
		divImg.appendChild(aImg);
		aImg.appendChild(img);

		var divTitle = document.createElement("div");
		var aImg = document.createElement("a");
		divTitle.appendChild(aImg);
		aImg.innerHTML = arrayIndex[i].title;
		
		div.appendChild(divImg);
		div.appendChild(divTitle);

		var myDiv = document.getElementById(select);
		myDiv.appendChild(div);
 	}
}

function myOnload(){
	loadPatterns(4,"popular");
	loadPatterns(8,"recent");
}

function myOnloadIndex(){
	loadPatternsIndex(4,"popular");
	loadPatternsIndex(8,"recent");
}

function loadPatternsAll(){
	loadPatterns(array.length,"subcontent");
	removeOptions("categories");
	onLoad();
}

function onLoad(){
	var arrayca = ["Engineering","Educational","Households","Toys","Others"];
	addOptions("categories",arrayca);
}

function addOptions(domElement,array){
	var select = document.getElementById(domElement);
	var option;
	for (value in array){
		option = document.createElement("option");
		option.text = array[value];
		option.value = array[value];
		select.add(option);
	}
}

function removeOptions(event){
	var select = document.getElementById(event);
	var count = select.length;
	for(var i = 0; i < count-1; i++){
		select[1].remove();
	}
}

function createCookie(event){
	var value = event.target.getAttribute('value');
	document.cookie = value;
}

function patternLoad(){
	var object = {};
	for (var i = array.length - 1; i >= 0; i--) {
		if(array[i].title==document.cookie){
				object = array[i];
		}
	}

	var myDivPattern = document.getElementById("photo");
	var myDivText = document.getElementById("description");

	var img = document.createElement("img");
	var src = object.img;
	img.setAttribute("src",src);
	myDivPattern.appendChild(img);
	
	var title1 = document.createElement("p");
	var value = object.title;
	value = value.toUpperCase();
	title1.innerHTML = "<b>" + value + "</b>";
	myDivText.appendChild(title1);

	var description = document.createElement("p");
	var desc = object.description;
	description.innerHTML = desc;
	myDivText.appendChild(description);
	var button = document.createElement("a");
	button.setAttribute("href",object.file);
	button.setAttribute("class","download");
	button.innerHTML = 'Download <i class="fa fa-download"></i>';
	myDivText.appendChild(button);
	document.cookie = '';
}

var count = 1;
function sig(){
	if(count == 3){
		count = 1;
	}else{
		count++;
	}
	var imagen = document.getElementsByTagName("img")[0];
	var nuevasrc = imagen.getAttribute("src").replace(/[0-9]/,count);
	imagen.src = nuevasrc;
}