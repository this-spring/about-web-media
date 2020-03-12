/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-03-02 23:53:57
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-03-13 00:45:48
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
  var baseClassName = '';
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
          var id = `x${i}x`;
          item.setAttribute('id', id);
          item.id = id;
        }
        if (bufferedLen === 0) {
          buffered = 0;
        } else {
          buffered = parseInt(item.buffered.end(0) - item.currentTime, 10);
        }
        infos.push({
          id: item.id,
          currentTime: parseInt(item.currentTime),
          buffered: buffered,
          url: item.src,
        });
        baseClassName = item.classList;
        changeBorder(document.getElementById(item.id));
      }
      return infos;
    },
  }

  function changeBorder(ele) {
    if (!ele) return;
    if (count % 2 === 0) {
      ele.classList.remove('remove-x');
      ele.classList.add('add-x');
    } else {
      ele.classList.remove('add-x');
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