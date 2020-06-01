// awe


$('._jsNext').on('click', function(){
	$('body').addClass("feed");
	
})

// init swiper

var feedSwiper = new Swiper('.swiper-container.feedSwiper',{
	spaceBetween: 23,
	slidesPerView:2,
	centeredSlides:true,
})


var tagSwiper = new Swiper('.swiper-container.confTags',{
	slidesPerView:3,
	spaceBetween:20,
})


$('.menuItem').on('click', function(){
	$(this).addClass('active');
	$(this).siblings().removeClass('active');
})


