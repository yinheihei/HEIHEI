$(()=>{
　　$("#foot").load("foot.html")
	$("#head").load("head.html")
})
$(document).ready(function () {
  var swiper = new Swiper('.swiper-container', {
  	 loop: true, // 循环模式选项
  	    autoplay:{
    	stopOnLastSlide:true
     },
      spaceBetween: 30,
      effect: 'fade',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

})

