chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    console.log(request, sender);
    // if (request.type === 'xyinfo' && Object.keys(request.data).length > 0) {
    //   var content = '';
    //   for (key in request.data) {
    //     content = content + key + '： ' + (typeof request.data[key] === 'Number' ? request.data[key].toFix(3) : request.data[key]) + '<br/>';
    //   }
    //   document.getElementById('skj-message').innerHTML = content;
    // } else if (request.type === 'errorinfo') {
    //   document.getElementById('errormes').innerHTML += request.data;
    // }
});