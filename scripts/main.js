var pullData = $('form').on('submit', function(e) {
	$('#userData').empty();
	e.preventDefault();
	var userInput = $('input').val();
	var url = 'https://api.etsy.com/v2/listings/active.js?api_key=hvcbro8gft92chaafb1xkojr&keywords='+userInput+'&includes=Images,Shop'
	var results = {
	    url: url,
	    dataType: 'jsonp',
	    type: 'GET',
	    success: function(data) {
			var container1 = $('#userData');
			data.results.forEach(function(val) {
				var container2 = $('<div class="container2"></div>');
				var images = $('<img>', {'src': val.Images[0].url_170x135});
				var imageLink = $('<a></a>', {href: val.url});
				var listing = $('<div class="listing"></div>');
				var titleLink = $('<a></a>', {href: val.url}).html(val.title);
				var description = $('<a></a>', {href: val.Shop.url, class: 'seller'}).html(val.Shop.shop_name);
				var price = $('<span></span>', {class: 'price'}).html('$' +val.price);
				imageLink.append(images);
				listing.append(titleLink);
				container2.append(imageLink);
				container2.append(listing);
				container2.append(description);
				container2.append(price);
				container1.append(container2);
			});
		},
	    error: function(err) {
	        console.log(err);
	    },
	    complete: function() {
	        console.log('Success function is working properly.');
	    }
	};
	$.ajax(results);
	$('input').val('');
});




