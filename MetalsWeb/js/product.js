productA = [
{"img":"../static/image/IMG_2232.JPG","name":"不锈钢1",'id':"01"},
{"img":"../static/image/IMG_2232.JPG","name":"不锈钢2",'id':"02"},	
{"img":"../static/image/IMG_2232.JPG","name":"不锈钢3",'id':"03"},
{"img":"../static/image/IMG_2232.JPG","name":"不锈钢4",'id':"04"},
{"img":"../static/image/IMG_2232.JPG","name":"不锈钢1",'id':"05"},
{"img":"../static/image/IMG_2232.JPG","name":"不锈钢1",'id':"06"},	
{"img":"../static/image/IMG_2232.JPG","name":"不锈钢1",'id':"07"},
{"img":"../static/image/IMG_2232.JPG","name":"不锈钢1",'id':"08"},
]
productB = [
{"img":"../static/image/IMG_2232.JPG","name":"碳钢件",'id':"01"},
{"img":"../static/image/IMG_2232.JPG","name":"碳钢件",'id':"01"},	
{"img":"../static/image/IMG_2232.JPG","name":"碳钢件",'id':"01"},
{"img":"../static/image/IMG_2232.JPG","name":"碳钢件",'id':"01"},
{"img":"../static/image/IMG_2232.JPG","name":"碳钢件",'id':"01"},
{"img":"../static/image/IMG_2232.JPG","name":"碳钢件",'id':"01"},	
{"img":"../static/image/IMG_2232.JPG","name":"碳钢件",'id':"01"},
{"img":"../static/image/IMG_2232.JPG","name":"碳钢件",'id':"01"},
]

desList = [
{"title":"这是一个产品名字1","type_pro":"五金","size":"100*200","weight":"1000g","texture":"五金","page":"这里就是产品的详情介绍",'forkey':"01","img":"../static/image/IMG_2232.JPG"},
{"title":"这是一个产品名2","type_pro":"五金","size":"10000","weight":"1000g","texture":"五金","page":"这里就是产品的详情介绍",'forkey':"02","img":"../static/image/IMG_2232.JPG"},
{"title":"这是一个产品名字3","type_pro":"五金","size":"100*200","weight":"1000g","texture":"五金","page":"这里就是产品的详情介绍",'forkey':"03","img":"../static/image/IMG_2232.JPG"},
{"title":"这是一个产品名字4","type_pro":"五金","size":"10000","weight":"1000g","texture":"五金","page":"这里就是产品的详情介绍",'forkey':"04","img":"../static/image/IMG_2232.JPG"},
{"title":"这是一个产品名字5","type_pro":"五金","size":"100*200","weight":"1000","texture":"五金","page":"这里就是产品的详情介绍",'forkey':"05","img":"../static/image/IMG_2232.JPG"},
{"title":"这是一个产品名字6","type_pro":"五金","size":"10000","weight":"1000","texture":"五金","page":"这里就是产品的详情介绍",'forkey':"06","img":"../static/image/IMG_2232.JPG"},
{"title":"这是一个产品名字7","type_pro":"五金","size":"100*200","weight":"1000","texture":"五金","page":"这里就是产品的详情介绍",'forkey':"07","img":"../static/image/IMG_2232.JPG"},
{"title":"这是一个产品名字8","type_pro":"五金","size":"10000","weight":"1000","texture":"五金","page":"这里就是产品的详情介绍",'forkey':"08","img":"../static/image/IMG_2232.JPG"}
]
	




$(()=>{
　　      $("#foot").load("foot.html")
     $("#head").load("head.html")
     
     
 
    //不锈钢
	$('.produce_nava').click(function(){
		let ClassState = $(".hardware_content_list").prop("className");
		if (ClassState.length==40){
			$('.hardware_details').addClass('list_hide');
    		$('.hardware_content_list').removeClass('list_hide');
		}		
	   	$(".hardware_content_list li").remove();
	    $('.produce_navb').removeClass('product_active');
        $(this).addClass('product_active')   
	    changeProduct(productA)
	})
	//碳钢件
    $('.produce_navb').click(function(){
    	let ClassState = $(".hardware_content_list").prop("className");
		if (ClassState.length==40){
			$('.hardware_details').addClass('list_hide');
    		$('.hardware_content_list').removeClass('list_hide');
		}		
  	$(".hardware_content_list li").remove();
	    $('.produce_nava').removeClass('product_active');
        $(this).addClass('product_active')   
	    changeProduct(productB)
	})
	
	//数据初始
    $.each(productA,function(key,value){
   	 let list = $("<li index="+value.id+"><div><img src="+value.img+"/><b>"+value.name+"</b></div></li>")
     $(".hardware_content_list").append(list);
    })
    //点击进入详情
    $('.hardware_content_list').on("click","li",function(){
    	let id = $(this).attr("index");
    	$('.hardware_content_list').addClass('list_hide');
    	$('.hardware_details').removeClass('list_hide');
    	$(".hardware_details_name").children().remove();
    	$(".hardware_details_img").children().remove();
    	$('.hardware_details_bottom span').html("")
    	$.each(desList,function(key,value){	
    	 	if (id==value.forkey){   
    	 		let list = $(`<h3>${value.title}</h3><p>类型:${value.type_pro}</p><p>大小:${value.size}</p><p>重量:${value.weight}</p><p>材质:${value.texture}</p>`)
     			$(".hardware_details_name").append(list);
     			let imga = $("<img src="+value.img+"/>")
     			$(".hardware_details_img").append(imga);
     			$('.hardware_details_bottom span').html(value.page)	
    	 	}
    	})	
    })
    
   	
})


function changeProduct(protype){
	let liSize = $(".hardware_content_list").children().length
	if (liSize==0){
		 $.each(protype,function(key,value){
	   	 let list = $("<li index="+value.id+"><div><img src="+value.img+"/><b>"+value.name+"</b></div></li>")
  	     $(".hardware_content_list").append(list);
	   })
	}	
}


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
      var swiper2 = new Swiper('.swiper-container-two', {
	  	loop: true, // 循环模式选项
	    autoplay:{
		stopOnLastSlide:true
		 },
		effect: 'flip',
		grabCursor: true,
		pagination: {
		el: '.swiper-pagination',
		},
});
     

})