function save_options() {
	
  var keyboardShortcutEnabled = document.getElementById('keyboard-shortcut-enabled').checked;
  var keyboardShortcutValue = document.getElementById('keyboard-shortcut-value').value;
  
  chrome.storage.sync.set({
    keyboardShortcutEnabled: keyboardShortcutEnabled,
    keyboardShortcutValue: keyboardShortcutValue
  }, function() { });
}

function restore_options() {
	
  chrome.storage.sync.get({
    keyboardShortcutEnabled: true,
    keyboardShortcutValue: 'ctrl-shift-c'
  }, function(items) {  
    document.getElementById('keyboard-shortcut-enabled').checked = items.keyboardShortcutEnabled;
    document.getElementById('keyboard-shortcut-value').value = items.keyboardShortcutValue;
  });
}

document.addEventListener('DOMContentLoaded', function(){
	
	document.getElementById('keyboard-shortcut-enabled').addEventListener('change', save_options);
	document.getElementById('keyboard-shortcut-value').addEventListener('change', save_options);
	
	restore_options();
});

