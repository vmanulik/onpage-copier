
var elementName = window.copiedOnce ? "TitleText" : "BoldText";

var elements = document.getElementsByClassName(elementName);
var element = elements[0];
	
window.copiedOnce = !window.copiedOnce;

chrome.runtime.sendMessage({
	type: 'copy',
	text: element.innerText
});