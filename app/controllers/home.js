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

// Setting views for the home screen
$.contentController = Alloy.createController("common/MasterView");
$.contentWrapper && $.contentWrapper.add($.contentController.wrapper);
