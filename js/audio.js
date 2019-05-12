var soundEffect = document.querySelector(".download");
soundEffect.addEventListener("click", sound);
function sound(){
	var audio = new Audio('../audio/printer.mp3');
	audio.play();
}