/*封装的普通轮播图的js*/
function OrdinaryCarousel(Eve,time){
	/*切换的方法*/
	function tab(){
		Eve.find('ol li').eq(iNow).addClass('active');
		Eve.find('ol li').eq(iNow).siblings('li').removeClass('active');
		Eve.find('ul li').eq(iNow).addClass('active');
		Eve.find('ul li').eq(iNow).siblings('li').removeClass('active');
	}
	/*自动轮播方法*/
	function tick(){
		timer = setInterval(function(){
			iNow++;
			if(iNow==Eve.find('ul li').length){
				iNow=0;
			}
			tab();

		}, time);
	}
	Eve.find('ol').on('click','li',function(){
		iNow = $(this).index();
		tab();
	});
	var iNow=0;
	var timer=null;
	tick();
	Eve.hover(function(){
		clearInterval(timer);
	},function(){
		tick();
	});
}

/* 返回顶部*/
;(function(){
	function b() {
		h = $(window).height(), t = $(document).scrollTop(),
		200 > t ? $("#moquu_top").hide() : $("#moquu_top").show();
	}
	$(document).ready(function() {
		b(), 
		$("#moquu_top").click(function() {
			$(document).scrollTop(0)
		})
	})
	$(window).scroll(function() {
		b();
	});
})();


//详情跳转
function readAll(id) {
	window.open("News_detail.jsp?id=" + id);
}

//更多跳转
function gonews(a, b, c, d) {
	var obj = {
		"a": a,
		"b": b,
		"c": c,
		"d": d
	}
	localStorage.nowNewsType = JSON.stringify(obj);
	window.open("news_more.jsp");
}

//日期格式化
var format = function(time, format) {
	var t = new Date(time);
	var tf = function(i) {
		return(i < 10 ? '0' : '') + i
	};
	return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function(a) {
		switch(a) {
			case 'yyyy':
				return tf(t.getFullYear());
				break;
			case 'MM':
				return tf(t.getMonth() + 1);
				break;
			case 'dd':
				return tf(t.getDate());
				break;
		};
	});
};

//取出中文汉字，并且截取相应的字数
function sub_string(str, length) {
	var str = str;
	str = str.replace(/[^\u4e00-\u9fa5]/gi, "");
	if(str.length > length) {
		return str.substring(0, length) + "..."
	}
	return str
}

$(function(){
	$("#common_header").load("common_header.html");
	$("#common_right").load("common_right.html");
	$("#common_fotter").load("common_fotter.html");
});
//我的下载
function mydown() {
	window.location.href="my_download.html";
}

//我的消息
function mynews() {
	window.location.href="my_news.html";
}

//用户协议
//function userAgreement() {
//	window.location.href="user_greement.html";
//}

//常见问题
function commonProblem() {
	window.location.href="common_problem.html";
}

////联系我们
//function contactUs() {
//	window.location.href="contact_us.html";
//}

// 反馈留言
function FeedbackMessage() {
	window.location.href="feedback_message.html";
}


