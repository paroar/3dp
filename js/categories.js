var categoriesArray = ["Engineering","Educational","Households","Toys","Others"];

function onLoadCategories(){
	addOptions("categories",categoriesArray);
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