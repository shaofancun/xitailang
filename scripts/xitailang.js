"use strick";
if($('#banner').length>0){
	//轮播图
	$('#banner').responsiveSlides({
		pager: true,
		namespace: 'centered-btns',
	});
	//轮播产品
	$('.prod_show_list').cxScroll();
}
//tab切换
$(".about_left a").click(function(){
	var tabId=$(this).data("toggle");
	$(".about_left a").removeClass('active');
	$(this).addClass('active');
	$(".about_right_box").fadeOut(300);
	$('#'+tabId+'').fadeIn(300);
})
//显示隐藏下载框
$("#downShow").click(function(){
	$(this).parent().addClass("down");
	$(".mark").fadeIn(300);
	$(".down_box").fadeIn(300);
})
$(".mark").click(function(){
	$(".mark").fadeOut(300);
	$(".down_box").fadeOut(300);
	$("#downShow").removeClass("down");
})