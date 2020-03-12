/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-03-02 23:53:57
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-03-12 23:49:11
 */
'use strict';

/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-03-03 13:02:19
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-03-03 13:24:25
 */
(function(root, factory) {
  root['video'] = factory();
})(this, function() {
  var count = 0;
  var videoHelp = {
    // [{id: ,currentTime: , buffered: }]
    videosInfo: function() {
      var videos = document.querySelectorAll('video');
      var infos = [];
      count ++;
      for (let i = 0; i < videos.length; i += 1) {
        var item = videos[i];
        var bufferedLen = item.buffered.length;
        var buffered = '';
        if (!item.id) {
          item.setAttribute('id', i);
          item.id = i;
        }
        if (bufferedLen === 0) {
          buffered = 0;
        } else {
          buffered = item.buffered.end(0) - item.currentTime;
        }
        infos.push({
          id: item.id,
          currentTime: parseInt(item.currentTime),
          buffered: buffered,
          url: item.src,
        });
        changeBorder(document.getElementById(item.id));
      }
      return infos;
    },
  }

  function changeBorder(ele) {
    if (!ele) return;
    if (count % 2 === 0) {
      ele.classList.add('add-x');
    } else {
        ele.classList.add('remove-x');
    }
  }
  return videoHelp;
});

var res = '';
setInterval(() => {
  res = video.videosInfo();
  if (res.length === 0) return;
  window.postMessage(JSON.parse(JSON.stringify({type: 'videoinfo', info: JSON.stringify(res)})));
}, 1000);