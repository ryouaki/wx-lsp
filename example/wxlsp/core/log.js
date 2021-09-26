let logger = {
  cb: console.log
}

module.exports = {
  setReportCallback(cb) {
    if (cb && typeof cb === 'function') {
      logger.cb = cb
    } else {
      throw new Error('Report callback must be a function!')
    }
  },
  log(obj) {
    logger.cb({
      tag: 'log',
      ts: Date.now(),
      msg: obj
    })
  },
  event() {
    logger.cb({
      tag: 'event',
      ts: Date.now(),
      msg: obj
    })
  }
}