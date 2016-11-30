function $(id){
	return typeof id == "string" ? document.getElementById(id) : id;
}
window.onload = function(){
	var hTab = $(hotTab);
	var hLi = hTab.getElementsByTagName("li");
	var tCon1 = $(hotEssay);
	var tCon2 = $(hotLab);
	var tCon = [tCon1,tCon2];
	var cNav = $(contentNav);
	var cLi = cNav.getElementsByTagName("li");
	var pap = $(paper);
	var APP = $(APP);
	var chan = $(chan);
	var ASO = $(ASO);
	var nw = [pap,APP,chan,ASO];
	for (var i = 0;i < hLi.length;i++){
		hLi[i].index = i
		hLi[i].onmouseover = function() {
			for (var j = 0;j < hLi.length;j++){
				hLi[j].className = "";
				tCon[j].className = "hidden";
			}
			this.className = "hShow";
			tCon[this.index].className = "";
		}
	}
	for (var i = 0;i < cLi.length;i++){
		cLi[i].index = i;
		cLi[i].onmouseover = function() {
			for (var j = 0;j < cLi.length;j++){
				cLi[j].className = "";
				nw[j].className = "hidden";
			}
			this.className = "cShow";
			news[this.index].className = "";
		}
	}	
}
