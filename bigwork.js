var yesno = confirm("NBA香港运营有限公司（“我们”）委托深圳市腾讯计算机系统有限公司(“腾讯”）运营和维护NBA中国官方应用软件（“NBA中国APP”）和其他与NBA主题相关的网站、应用和服务。请您在使用我们的产品和/或服务前仔细阅读并确认您已经充分理解本政策所写明的内容,若已阅读请点击确定按钮访问页面。");
if(yesno==false){
	window.close();
}
var num=0;
var newsimg = document.getElementById("newsimg");
var bannerbox = document.getElementsByClassName("bannerbox")[0];
var arrUrl=["images/news2.png","images/news3.png","images/news4.png","images/news5.png","images/news1.png"];
setInterval(function(){
	num++;
	num %= arrUrl.length;
	newsimg.src = arrUrl[num];
}, 2000);
var searchSubmit = document.getElementById("searchSubmit");
var diaoIf = document.getElementsByClassName("diaoIf");
searchSubmit.onclick=function(){
	if(diaoIf[0].checked || diaoIf[1].checked ){
		alert("提交成功");
	}else{
		alert("提交失败");
	}
}
document.getElementsByClassName("search")[0].onclick=function(){
	document.getElementsByClassName("search")[0].value="";
}
var body = document.getElementsByTagName('body')[0];
var textArr=["富强", "民主", "文明", "和谐", "自由", "平等", "公正" ,"法治", "爱国", "敬业", "诚信", "友善"];
document.addEventListener('click',function(e){
	var ev = e || window.event;
	var baseX = ev.pageX;
	var baseY = ev.pageY;
	var new_span = document.createElement('span');
	new_span.innerText = textArr[Math.floor(Math.random()*12)];
	new_span.style.left = baseX-12+'px';
	new_span.style.top = baseY+'px';
	new_span.style.position = "absolute";
	new_span.style.zIndex = "2";
	body.appendChild(new_span);
	var timer = window.setInterval(function(){
		new_span.style.top = parseInt(window.getComputedStyle(new_span,null)['top'])-2+'px';
		new_span.style.opacity = window.getComputedStyle(new_span,null)['opacity']-0.03;
	},40);
	window.setTimeout(function(){
		window.clearInterval(timer);
		body.removeChild(new_span);
	},1000);
},false);

