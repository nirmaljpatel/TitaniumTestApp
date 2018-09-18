
var drawV= Widget.createController('SignDrawingPanel').getView();
$.signView.add(drawV);

var saveCallback = null;

var saveSignHdlr = function (evt) {
		Ti.App.removeEventListener('app:saveSign', saveSignHdlr);
		saveCallback(evt.inputArray);
};

function saveSign(callback){
	Ti.API.log('SignWidget', 'saveSign() invoked...');
	saveCallback = callback;
	Ti.App.addEventListener('app:saveSign', saveSignHdlr);
	Ti.App.fireEvent('app:signatureSave', {message : 'event fired from Titanium, for Signature Save'});
};

function clearSign(){
	Ti.API.log('SignWidget', 'clearSign() invoked...');
	Ti.App.fireEvent('app:signatureClear', {
			message : 'event fired from Titanium, for Signature Clear'
		});
};

function getSign(callback) {
	Ti.API.log('SignWidget', 'getSign() invoked...');
	saveSign(callback);
}

exports.getSign = getSign;
exports.clearSign = clearSign;