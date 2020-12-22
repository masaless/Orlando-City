// $(document).ready(function(){

// 	$("#logotipo").on("mouseover",function(){

// 		$("#banner h1").addClass("efeito");

// 	}).on("mouseout", function(){

// 		$("#banner h1").removeClass("efeito");

// 	});

// 	$("#input-search").on("focus", function(){

// 		$("li.search").addClass("ativo");

// 	}).on("blur", function(){

// 		$("li.search").removeClass("ativo");				

// 	});

// 	$(".thumbnails").owlCarousel({

//       autoPlay: 3000,
//       items : 4

//   	});

// });

$('.owl-carousel').owlCarousel({
	loop: true,
	margin: 10,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
			nav: true
		},
		600: {
			items: 3,
			nav: false
		},
		1000: {
			items: 5,
			nav: true,
			loop: false
		}
	},
})

var owl = $('.owl-carousel');
owl.owlCarousel();

$('#btn-news-prev').click(function () {
	owl.trigger('next.owl.carousel');
})

$('#btn-news-next').click(function () {
	owl.trigger('next.owl.carousel');
})