//your JS code here. If required.
document.getElementById("enterBtn").addEventListener("click",function(){
	let ab = document.getElementById("status");
	let newa = document.createElement("h1");
	newa.id="status";
	newa.textContent = "Entered Metaverse";
	ab.replaceWith(newa);
});