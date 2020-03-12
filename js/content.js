/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-03-02 23:53:57
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-03-12 23:18:35
 */
window.addEventListener("message", function(e) {
  const type = e.data.type;
  if (type === 'videoinfo') {
    chrome.runtime.sendMessage({"type":"videoinfo", "data": e.data.info}, function (response) {return;})
  } else if (type === 'bsinfo') {
    chrome.runtime.sendMessage({"type":"bsinfo", "data": e.data.info}, function (response){return;})
  }
}, false);

// 向页面注入JS
!function injectCustomJs(jsPath) {
  jsPath = jsPath || 'js/inject.js';
  var temp = document.createElement('script');
  temp.setAttribute('type', 'text/javascript');
  // 获得的地址类似：chrome-extension://ihcokhadfjfchaeagdoclpnjdiokfakg/js/inject.js
  temp.src = chrome.extension.getURL(jsPath);
  temp.onload = function () {
    // 放在页面不好看，执行完后移除掉
    this.parentNode.removeChild(this);
  };
  document.head.appendChild(temp);

  var cssPath = 'css/common-x.css';
  var cssTemp = document.createElement('link');
  cssTemp.setAttribute('rel', 'stylesheet');
  cssTemp.setAttribute('type', 'text/css');
  cssTemp.href = chrome.extension.getURL(cssPath);
  document.head.appendChild(cssTemp);
}();