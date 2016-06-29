chrome.browserAction.onClicked.addListener(function() {
	chrome.tabs.query({
		currentWindow: true,
		active: true
	}, function(tab) {
	chrome.runtime.onMessage.addListener(function(message) {
		if (message && message.type == 'copy') {
			var input = document.createElement('textarea');
			document.body.appendChild(input);
			
			input.value = message.text;
			input.focus();
			input.select();
			document.execCommand('Copy');
			
			input.remove();
		}
	});

		chrome.tabs.executeScript(null, {file: "content_script.js"});
	});
});