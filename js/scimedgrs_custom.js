(function($) {
	//alert("testing");
	
	myInterval = setInterval(function(){
		//$("div#slider_519").append("<p id=\"addedClass\">add you</p>");
		if($("div.flex-viewport").length > 0){
			$("div#slider_519").append("<div id=\"fadeDiv_0\"></div>");
			$("div#slider_519").append("<div id=\"fadeDiv_1\"></div>");
			clearInterval(myInterval);
		}
	},300);

	//console.log ($("#addedClass").length);
	//clearInterval(myInterval);

	$("#prof_s").keyup(function(){
		var filter = $(this).val(), count=0;

		$(".profileSummary").each(function(){

			if($(this).text().search(new RegExp(filter,"i"))<0){
				$(this).addClass("hidden"); 
		        $(this).removeClass("visible"); 
			}else {
				 $(this).removeClass("hidden");
		         $(this).addClass("visible");

		         $(".profileSummary .visible").each(function (index){
		         	$(this).attr("data-counted");
		         	$(this).attr("data-counted",resultscounted);
					resultscounted = resultscounted + 1;
		         });
		         count++;
			}
		});
	});

})( jQuery );