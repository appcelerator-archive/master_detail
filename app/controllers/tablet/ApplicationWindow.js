var args = arguments[0] || {};
var App = require('core');

var detailView = App.openScreen('common/DetailView');
var masterView = App.openScreen('common/MasterView', {
	updateText : detailView.updateText
});

$.leftContainer.add(masterView.getView());
$.rightContainer.add(detailView.getView()); 