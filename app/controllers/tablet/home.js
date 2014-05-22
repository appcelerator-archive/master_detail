/**
 * # The home screen controller
 * @class Controllers.home
 * @uses core
 */
var App = require("core");

/**
 * Content controller reference
 * @type {Controllers}
 */
$.contentController = {};
$.childController = {};

// Setting views for the home screen
$.contentController = Alloy.createController("common/MasterView");
$.childController = Alloy.createController("common/DetailView");
$.contentController.updateText = $.childController.updateText;
$.leftContentWrapper && $.leftContentWrapper.add($.contentController.wrapper);
$.rightContentWrapper && $.rightContentWrapper.add($.childController.wrapper);
