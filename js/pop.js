window.onload = function(){
	//页面高度和宽度
	var sHeight = document.documentElement.scrollHeight;
	var sWidth = document.documentElement.scrollWidth;
	//可视区域高度和宽度
	var wHeight = document.documentElement.clientHeight;
	var wWidth = document.documentElement.clientWidth;
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
}
