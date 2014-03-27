var args = arguments[0] || {};
var App = require('core');

//some dummy data for our table view
var tableData = [
	{title:'Apples', price:'1.25', hasChild:true, color: '#000'},
	{title:'Grapes', price:'1.50', hasChild:true, color: '#000'},
	{title:'Oranges', price:'2.50', hasChild:true, color: '#000'},
	{title:'Bananas', price:'1.50', hasChild:true, color: '#000'},
	{title:'Pears', price:'1.40', hasChild:true, color: '#000'},
	{title:'Kiwis', price:'1.00', hasChild:true, color: '#000'}
];

$.table.setData(tableData);

/* Click Event listener of table to select an item
 * Check if there is a method to update the text (in case of tablet), 
 * else case will be used for handheld devices as new screen is opened on every product selection.
 * */
function selectItem(e) {
	if (args.updateText) {
		args.updateText({
			name : e.rowData.title,
			price : e.rowData.price
		});
	} else {
		App.openScreen('common/DetailView', {
			title : 'Product Details',
			navGroup : $.navGroup || null,
			name : e.rowData.title,
			price : e.rowData.price
		});
	}
}
