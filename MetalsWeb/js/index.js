
$(()=>{
	$("#foot").load("foot.html")
	$("#head").load("head.html")
})
$(document).ready(function () {
   var mySwiper = new Swiper ('.swiper-container', {
    loop: true, // 循环模式选项
    autoplay:{
    	stopOnLastSlide:true
    },
//  // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
//  
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
})        
})
