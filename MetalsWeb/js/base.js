$(function () {
    getNavIdex = sessionStorage.getItem("nav_index");
    if(getNavIdex){
    	$('.nav_metals').children().removeClass('nav_active');
    	$('.nav_metals li').eq(getNavIdex).addClass('nav_active')  	
    }
    else{
    	
    }
    $('.nav_metals').children().click(function(){
	    $(this).addClass('nav_active').siblings().removeClass('nav_active');	//改变颜色
		let id = $(this).index();	//当前操作的元素索引值
		let FileName = ['index','walkHL','product','show','news','connect'];
		
		sessionStorage.setItem("nav_index", id);
		location.href=`${FileName[id]}.html`;
	})
    $('.openlink').click(function(){
		sessionStorage.setItem("nav_index", 5);

	})
    $('.opennews').click(function(){
		sessionStorage.setItem("nav_index", 4);

	})
    
    $('.dask').click(function(){
		sessionStorage.setItem("nav_index", 2);
		location.href='product.html';

	})
    
    //
    $('.foot_link').children().click(function(){
   // $(this).addClass('nav_active').siblings().removeClass('nav_active');	//改变颜色
	let id = $(this).index();	//当前操作的元素索引值
	let FileName = ['index','walkHL','product','show','news','connect'];
	sessionStorage.setItem("nav_index", id);
	location.href=`${FileName[id]}.html`;
	})
    
});



