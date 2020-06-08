	// self call to prevent polluting window
	(function(){


		$(document).ready(function(){
			$('body').removeClass('loading');
				// use funtion directly on HTML

		function openModal() {
			
			body.addClass("modalOpen");
		}

		function closeModal(){
			
			body.removeClass("modalOpen");
		}
		})

		var feedSwiper = new Swiper ('.swiper-container.feed', {
			direction: 'horizontal',
			slidesPerView:2,
			centeredSlides:true,
			spaceBetween:20,
		});


		var artistSwiper = new Swiper('.swiper-container.artists',{
			slidesPerView:4,
			freeMode:true,
			spaceBetween:20,
			loop:true,
		});

		// declare vars
		const search = $('.search');
		const searchForm = $('#search_form')[0];
		// console.dir(search);
		const nav_item = $('.navigation .item');
		const like = $('.favourite');
		const body = $('body');
		const close_search = $('.closeSearch');
		const close_modal = $('.closeIcon');
		const modal = $('.custModal');
		const buyBtn = $('._jsTickets');
		const master_card = $('.masterCard');
		const show_cards = $('.confirmPurchase a');
		const card = $('.cardWrapper');



		// open modal with buy button

		buyBtn.on("click", ()=> {
			body.addClass("buy-ticket");
		})

		close_modal.on("click",() => {
			body.removeClass("buy-ticket");
			master_card.removeClass("card-open").removeClass("card-closed");

		})


		// do fancy shit with the master and visa cards

		card.on("click", function(){
			_this = $(this);
			_this.parent().toggleClass("card-open");
			_this.parent().siblings().toggleClass("card-closed");
		})


		show_cards.on('click', () => {
			// _this = $(this);
			console.log("clicked")
			master_card.removeClass("card-open");
			master_card.siblings().removeClass("card-closed");
		})



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
			body.removeClass('search-in-progress')
			$('#search_form').val(""); //clear the form on close
		})

		if (searchForm != null || searchForm != undefined){
		searchForm.addEventListener("keyup", function(){
			if(searchForm.value.length > 0){
				body.addClass("search-in-progress")
			}
		})
	}


		// add bookmark UI animation
		// 
		$('.favourite').on("click", function(){
			$(this).toggleClass("clicked");
		})

		// fetch some data using the fetch api
		// fetch('http://botapi.cloudaccess.host/wp-json/wp/v2/posts')
		// .then(function(res){
		// 	let data = res.json();
		// })
		// .then(function(data){
		// 	console.log(data);
		// })
	})()