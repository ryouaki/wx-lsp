'use strict';
const chokidar = require('chokidar');

chokidar.watch('.', {
  ignored: /node_modules|\.git/,
  persistent: true,
  ignoreInitial: true
  // followSymlinks: false,
  // useFsEvents: false,
  // usePolling: false,
})
.on('all', (event, path) => { console.log(event, path); })
.on('ready', () => { console.log('Ready'); })
//.on('raw', console.log.bind(console, 'Raw event:'))