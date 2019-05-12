var array = JSON.parse(jsonString);
var arrayIndex = JSON.parse(jsonStringIndex);

function orderByLateDate(param){
	param.sort(function(a,b){
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

function orderByDownloads(param){
	param.sort(function(a,b){
		return b.downloads-a.downloads;
	});
}

function loadPatterns(num,select,param,flag){
	if(select=="recent"){
		orderByLateDate(param);
	}else{
		orderByDownloads(param);
	}
	for (var i = num-1; i >= 0; i--) {
		var div = document.createElement("div");
		div.setAttribute("id","pattern");
		div.setAttribute("class","pattern");
		div.setAttribute("onclick","createCookie(event)")
		var value = param[i]._category;
		div.setAttribute("value",value);
		var title = param[i].title.replace(" ","");
		title = title.toLowerCase();
		div.setAttribute("name",title);

		var divImg = document.createElement("div");
		var aImg = document.createElement("a");
		var img = document.createElement("img");
        if(flag){
		    aImg.setAttribute("href","html/pattern.html");
        }else{
            aImg.setAttribute("href","pattern.html");
        }
		img.setAttribute("value",param[i].title);
		img.setAttribute("src",param[i].img);
		divImg.appendChild(aImg);
		aImg.appendChild(img);

		var divTitle = document.createElement("div");
		var aImg = document.createElement("a");
		divTitle.appendChild(aImg);
		aImg.innerHTML = param[i].title;
		
		div.appendChild(divImg);
		div.appendChild(divTitle);

		var myDiv = document.getElementById(select);
		myDiv.appendChild(div);
 	}
}

function myOnloadIndex(){
	loadPatterns(4,"popular",arrayIndex,true);
	loadPatterns(8,"recent",arrayIndex,true);
}

function loadPatternsAll(){
	loadPatterns(array.length,"subcontent",array,false);
	removeOptions("categories");
	onLoadCategories();
}

function createCookie(event){
	Cookies.clear('myCookie');
	var value = event.target.getAttribute('value');
	Cookies.set('myCookie',value, {path : '/'});
}

function patternLoad(){
    var myCookie = Cookies.get('myCookie');
	var object = {};
	for (var i = array.length - 1; i >= 0; i--) {
		if(array[i].title==myCookie){
			object = array[i];
		}	
	}

	var myDivPattern = document.getElementById("photo");
	var myDivText = document.getElementById("description");
    var download = document.getElementById("download");

	var img = document.createElement("img");
	var src = object.img;
	img.setAttribute("src",src);
	myDivPattern.appendChild(img);
	
	var title1 = document.createElement("p");
	var value = object.title;
	value = ""+value.toUpperCase();
	title1.innerHTML = "<b>" + value + "</b>";
	myDivText.appendChild(title1);

	var description = document.createElement("p");
	var desc = object.description;
	description.innerHTML = desc;
	myDivText.appendChild(description);
	download.setAttribute("href",object.file);
}

var count = 1;
function nextImg(){
	if(count == 3){
		count = 1;
	}else{
		count++;
	}
	var imagen = document.getElementsByTagName("img")[0];
	var nuevasrc = imagen.getAttribute("src").replace(/[0-9]/,count);
	imagen.src = nuevasrc;
}