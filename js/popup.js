/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-03-02 23:53:57
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-03-09 23:54:33
 */
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    const type = request.type;
    var html = '';
    if (type === 'videoinfo') {
      const info = JSON.parse(request.data);
      const content = document.getElementById('main');
      const hasTemplage = content.innerText;
      if (!hasTemplage) {
        for (let i = 0; i < info.length; i += 1) {
          var id = info[i].id;
          html += makeTemplate(id, currentTime, buffered, src);
        } 
        content.innerHTML = html;
        return;
      }
      for (let i = 0; i < info.length; i += 1) {
        var id = info[i].id;
        var currentTime = info[i].currentTime;
        var buffered = info[i].buffered;
        var src = info[i].url;
        document.querySelectorAll(`.${id}`)[0].innerHTML = id;
        document.querySelectorAll(`.${id}`)[1].innerHTML = `${buffered}s`;
        document.querySelectorAll(`.${id}`)[2].innerHTML = `${currentTime}s`;
        document.querySelectorAll(`.${id}`)[3].innerHTML = src;
      }
    } else if (request.type === 'bsinfo') {
    }
  });

function makeTemplate(id) {
  var tem = `
  <div class="video-content">
    <div class="info-name">
      <span class="info-key">唯一标识:</span>
      <span class="${id}"></span>
    </div>
    <div class="info-name">
      <span class="info-key">缓存时长:</span>
      <span class="${id}"></span>
    </div>
    <div class="info-name">
      <span class="info-key">播放时长:</span>
      <span class="${id}"></span>
    </div>
    <div class="info-name src-bottom">
      <span class="info-key">播放地址:</span>
      <span class="info-src ${id}"></span>
    </div>
  </div>`;
  return tem;
}