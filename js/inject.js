'use strict';

window.xyhelper = window.helper || {};

window.xyhelper.onInfo = function(mes) {
  window.postMessage(JSON.parse(JSON.stringify({type: 'xyinfo', info: mes})), '*');
};

window.xyhelper.onGlobaleError = function(mes) {
  window.postMessage({type: 'errorinfo', info: mes}, '*');
};