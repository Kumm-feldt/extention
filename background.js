chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    // tabs is an array of tab objects
    console.log(tabs[0].url);
  });
  