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
var tab=$(".about_left a");		//所有的tab a标签
tab.click(function(){
	var tabId=$(this).data("toggle");		//获取点击的ID
	tab.removeClass('active');
	$(this).addClass('active');
	$(".about_right_box").fadeOut(300);
	$('#'+tabId+'').fadeIn(300);
})

//显示隐藏下载框
var mark=$(".mark"),		//遮罩层
	downBtn=$("#downShow"),		//下载按钮
	downBox=$(".down_box");		//下载框
downBtn.click(function(){
	downBtn.addClass("down");
	mark.fadeIn(300);
	downBox.fadeIn(300);	
})
mark.click(function(){
	mark.fadeOut(300);
	downBox.fadeOut(300);
	downBtn.removeClass("down");
})