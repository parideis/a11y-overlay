console.log("Hello From Sidebar");

function toggleOnlyFocus() {
//TODO: deactive onlyFocus when it's already active
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tabId = tabs[0].id;
    console.log("TabId: ", tabId);
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabId || 0,
        { action: "onlyFocus" },
        (response) => {
          console.log("Response:", response);
        }
      );
    });
  });
}

document.getElementById("onlyfoucs").addEventListener("click", function () {
  toggleOnlyFocus();
});
