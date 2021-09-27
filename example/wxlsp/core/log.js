let logger = {
  cb: console.log
}
// Duration
module.exports = {
  setReportCallback(cb) {
    if (cb && typeof cb === 'function') {
      logger.cb = cb
    } else {
      throw new Error('Report callback must be a function!')
    }
  },
  log(type, obj, opts) {
    logger.cb({
      tag: 'log',
      type: type,
      ts: Date.now(),
      msg: obj,
      opts
    })
  },
  event(type, obj) {
    logger.cb({
      tag: 'event',
      type: type,
      ts: Date.now(),
      msg: obj
    })
  }
}