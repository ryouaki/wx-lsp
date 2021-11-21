const WxmlExtension = require('./extensions/wxml');

const plugins = [
  WxmlExtension
];

function activate(context) {
  plugins.forEach(plugin => plugin.activate(context));
}

function deactivate() {
  plugins.forEach(plugin => plugin.deactivate());
}

exports.activate = activate;
exports.deactivate = deactivate;
