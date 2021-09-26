// Called when the user clicks on the browser action.
chrome.action.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  chrome.scripting.executeScript({
    code: 'document.body.style.backgroundColor="red"'
  });
});