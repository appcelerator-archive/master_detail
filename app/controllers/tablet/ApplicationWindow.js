var args = arguments[0] || {};

//Creating the controller for the views.
var detailView = Alloy.createController('common/DetailView');
var masterView = Alloy.createController('common/MasterView', {
	updateText : detailView.updateText
});

//Adding the created views to the left and right pane
$.leftContainer.add(masterView.getView());
$.rightContainer.add(detailView.getView()); 