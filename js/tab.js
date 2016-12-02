function $(id){
	return typeof id == "string" ? document.getElementById(id) : id;
}
window.onload = function(){
		//页面高度和宽度
	var sHeight = document.documentElement.scrollHeight;
	var sWidth = document.documentElement.scrollWidth;
	//可视区域高度和宽度
	var wHeight = document.documentElement.clientHeight;
	var wWidth = document.documentElement.clientWidth;
	//创建遮罩
	var oMask = document.createElement("div");
	oMask.id = "mask";
	oMask.style.height = sHeight + "px";
	oMask.style.width = sWidth + "px";
	document.body.appendChild(oMask);
	
	var oTipbox = document.createElement("div");
	oTipbox.id = "tipBox";
	oTipbox.innerHTML = "<p><i class='fa fa-smile-o' aria-hidden='true'></i>您的报名信息已提交！</p><p>请等待工作人员的进一步通知。</p><button id='close'>好的</button>";
	document.body.appendChild(oTipbox);
	//获取oTipbox的宽高,通用的居中方式，不过这里所有尺寸以PSD设计稿为准，故高度位置由CSS直接设置
//	var dHeight = oTipbox.offsetHeight;
	var dWidth = oTipbox.offsetWidth;
	oTipbox.style.left = (wWidth - dWidth)/2 + "px";
//	oTipBox.style.top = (wHeight - dHeight)/2 + "px"
//关闭弹窗
	var oclose = document.getElementById("close");
	oclose.onclick = function(){
		document.body.removeChild(oMask);
		document.body.removeChild(oTipbox);
	}
	//Tab选项卡切换，此处JS获取元素尽量用ID选择器
	var hTab = $(hotTab);
	var hLi = hTab.getElementsByTagName("li");
	var tCon1 = $(hotEssay);
	var tCon2 = $(hotLab);
	var tCon = [tCon1,tCon2];
	var cNav = $(contentNav);
	var cLi = cNav.getElementsByTagName("li");
	var news1= $(paper);
	var news2 = $(APP);
	var news3 = $(chan);
	var news4 = $(ASO);
	var news = [news1,news2,news3,news4];//这里之前用ID名字命名时出现错误
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
				news[j].className = "hidden";
			}
			this.className = "cShow";
			news[this.index].className = "";
		}
	}	
}
