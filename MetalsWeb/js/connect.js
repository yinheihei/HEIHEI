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
	
	// 百度地图API功能
    var map = new BMap.Map('allmap');
    var poi = new BMap.Point(114.442,22.835559);
    map.centerAndZoom(poi, 16);
    map.enableScrollWheelZoom();

    var content = '<div style="margin:0;line-height:20px;padding:2px;">' +
                    '<img src="../static/image/6f2q.jpg" alt="" style="float:right;zoom:1;overflow:hidden;width:100px;height:100px;margin-left:3px;"/>' +
                    '地址：惠州市亿利五金有限公司位于惠州市惠阳区秋长镇岭湖工业区<br/>电话：(0755)12345678<br/>简介：惠州市亿利五金有限公司位于惠州市惠阳区秋长镇岭湖工业区。' +
                  '</div>';

    //创建检索信息窗口对象
    var searchInfoWindow = null;
	searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
			title  : "亿利五金",      //标题
			width  : 290,             //宽度
			height : 105,              //高度
			panel  : "panel",         //检索结果面板
			enableAutoPan : true,     //自动平移
			searchTypes   :[
				BMAPLIB_TAB_SEARCH,   //周边检索
				BMAPLIB_TAB_TO_HERE,  //到这里去
				BMAPLIB_TAB_FROM_HERE //从这里出发
			]
		});
    var marker = new BMap.Marker(poi); //创建marker对象
    marker.enableDragging(); //marker可拖拽
    marker.addEventListener("click", function(e){
	    searchInfoWindow.open(marker);
    })
    map.addOverlay(marker); //在地图中添加marker
	

})