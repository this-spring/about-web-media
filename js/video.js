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
    function videoHelp() {

    }

    // [{id: ,currentTime: , buffered: }]
    videoHelp.prototype.videosInfo = function() {
        var videos = document.querySelectorAll('video');
        var infos = [];
        for (let i = 0; i < videos.length; i += 1) {
          var item = videos[i];
          infos.push({
            id: item.id,
            currentTime: item.currentTime,
            buffered: item.buffered.end(0) - item.currentTime,
          })
        }
        return infos;
    }

    return videoHelp;
});

document.getElementById('video').innerHTML = JSON.stringify(video.videosInfo);