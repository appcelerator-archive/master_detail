var args = arguments[0] || {};
var App = require('core');

//Creating the controller for the views.
var detailView = Alloy.createController('common/DetailView');
var masterView = Alloy.createController('common/MasterView', {
	updateText : detailView.updateText
});

if(OS_IOS && App.Device.version >= 7){
	$.leftContainer.top = 20;
	$.rightContainer.top = 20;
}

//Adding the created views to the left and right pane
$.leftContainer.add(masterView.getView());
$.rightContainer.add(detailView.getView()); 