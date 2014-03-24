var args = arguments[0] || {};

$.label.text = args.name ? args.name+': $'+args.price: 'Please select an item';

$.updateText = function(e){
	$.label.text = e.name+': $'+e.price;
};