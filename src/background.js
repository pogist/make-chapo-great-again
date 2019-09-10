// eslint-disable-next-line no-undef
const browserVendor = chrome || browser; // selects between chrome or firefox

browserVendor.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  const facebookUrlPattern = /.+?(?=:\/\/):\/\/www\.facebook\.com\/.*/gm;

  if (changeInfo.status === 'complete' && facebookUrlPattern.test(tab.url)) {
    browserVendor.tabs.executeScript(tabId, { file: 'content.js' });
  }
});
