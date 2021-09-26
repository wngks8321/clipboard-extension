console.log('test');

// Called when the user clicks on the browser action.
chrome.action.onClicked.addListener(function(tab) {
  console.log(tab);
  // No tabs or host permissions needed!
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['scripts.js'],
  },);
});

chrome.commands.onCommand.addListener((command, tab) => {
  console.log(command);
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['scripts.js'],
  },);
});