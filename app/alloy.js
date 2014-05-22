// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

//Function to check the platform form factor is tablet
Alloy.isTablet = function() {
	switch (Ti.Platform.osname) {
		case 'ipad':
			return true;
		case 'mobileweb':
			return false;
		case 'android':
			var psc = Ti.Platform.Android.physicalSizeCategory;
			var tiAndroid = Ti.Platform.Android;
			return psc === tiAndroid.PHYSICAL_SIZE_CATEGORY_LARGE || psc === tiAndroid.PHYSICAL_SIZE_CATEGORY_XLARGE;
		default:
			return Math.min(Ti.Platform.displayCaps.platformHeight, Ti.Platform.displayCaps.platformWidth) >= 400;
	};
}; 