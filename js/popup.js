/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-03-02 23:53:57
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-03-05 23:58:07
 */
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    const type = request.type;
    if (type === 'videoinfo') {
      const info = JSON.parse(request.data);
      const content = document.getElementById('main');
      var html = '';
      for (let i = 0; i < info.length; i += 1) {
        var id = info[i].id;
        var currentTime = info[i].currentTime;
        var buffered = info[i].buffered;
        var src = info[i].url;
        html += makeTemplate(id, currentTime, buffered, src);
      }
      content.innerHTML = html;
    } else if (request.type === 'bsinfo') {
    }
  });

function makeTemplate(id, currentTime, buffered, src) {
  var tem = `
  <div class="video-content">
    <div class="info-name">
      <span class="info-key">唯一标识:</span>
      <span>${id}</span>
    </div>
    <div class="info-name">
      <span class="info-key">缓存时长:</span>
      <span>${buffered}s</span>
    </div>
    <div class="info-name">
      <span class="info-key">播放时长:</span>
      <span>${currentTime}s</span>
    </div>
    <div class="info-name">
      <span class="info-key">播放地址:</span>
      <span class="info-src">${src}</span>
    </div>
  </div>`;
  return tem;
}