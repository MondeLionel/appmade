	// self call to prevent polluting window
	(function(){

		var feedSwiper = new Swiper ('.swiper-container.feed', {
			direction: 'horizontal',
			slidesPerView:1,
			freeMode:true,
			centeredSlides:true,
			spaceBetween:20,
		// loop:true,
		
	});


		var artistSwiper = new Swiper('.swiper-container.artists',{
			slidesPerView:4,
			freeMode:true,
			spaceBetween:20,
			loop:true,
		});

		// declare vars
		const search = $('.search');
		// console.dir(search);
		const nav_item = $('.navigation .item');
		const like = $('.favourite');
		const body = $('body');
		const close_search = $('.closeSearch')


		// class based nav yo
		nav_item.on('click', function(){
			_this = $(this);
			_this.addClass('active');
			_this.siblings().removeClass('active');
		})


		search.on('click', function() {
			body.toggleClass("searching")
		})

		close_search.on('click', function(){
			body.removeClass('searching');
			$('#search_form').val(""); //clear the form on close
		})




	})()