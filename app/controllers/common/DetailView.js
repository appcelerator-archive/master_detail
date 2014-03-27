var args = arguments[0] || {};

//Setting the text for first time on tablet and updated everytime for handheld devices
$.label.text = args.name ? args.name+': $'+args.price: 'Please select an item';

//Method to update text for tablet everytime user selects any product
$.updateText = function(e){
	$.label.text = e.name+': $'+e.price;
};