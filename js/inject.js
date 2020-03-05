/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-03-02 23:53:57
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-03-04 01:00:23
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
  var videoHelp = {
    // [{id: ,currentTime: , buffered: }]
    videosInfo: function() {
      var videos = document.querySelectorAll('video');
      var infos = [];
      for (let i = 0; i < videos.length; i += 1) {
        var item = videos[i];
        infos.push({
          id: item.id,
          currentTime: parseInt(item.currentTime),
          buffered: parseInt(item.buffered.end(0) - item.currentTime),
          url: item.src,
        })
      }
      return infos;
    },
  }
  return videoHelp;
});

var res = '';
setInterval(() => {
  res = video.videosInfo();
  window.postMessage(JSON.parse(JSON.stringify({type: 'videoinfo', info: JSON.stringify(res)})));
}, 2000);