
// chrome.runtime.onInstalled.addListener(() => {
//   chrome.sidePanel
//     .setPanelBehavior({
//       openPanelOnActionClick: true,
//     })
//     .catch((error) => console.error(error));

//   chrome.contextMenus.create({
//     id: 'openSidePanel',
//     title: getContextMenuTitle(),
//     contexts: ['all'],
//   });
// });
let popupWindowId = null; // 全局变量，记录已打开的标签页ID

chrome.action.onClicked.addListener(function () {
  // 检查是否已经有打开的标签页
  chrome.tabs.query({}, function (tabs) {
    const tabIds = (tabs || []).map(t => t.id);
    if (popupWindowId && tabIds && tabIds.length > 0 && tabIds.includes(popupWindowId)) {
      // 如果已经打开了目标网页，则激活该标签页
      chrome.tabs.update(popupWindowId, { active: true });
    } else {
      // 如果没有打开，则创建新的标签页
      chrome.tabs.create({
        url: "index.html"
      }, function (tab) {
        popupWindowId = tab.id; // 记录新打开的标签页ID
      });
    }
  });
});

// 监听标签页关闭事件，重置全局变量
chrome.tabs.onRemoved.addListener(function (tabId) {
  if (tabId === popupWindowId) {
    popupWindowId = null;
  }
});

