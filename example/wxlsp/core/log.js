import { getSessId } from './utils'
let logger = {
  cb: console.log
}

const _sess_id_ = getSessId()

function log (tag, type, method, obj) {
  logger.cb({
    tag: tag,
    type: type,
    func: method,
    ts: Date.now(),
    sid: _sess_id_,
    ...obj
  })
}

module.exports = {
  setReportFn(cb) {
    if (cb && typeof cb === 'function') {
      logger.cb = cb
    } else {
      throw new Error('Report callback must be a function!')
    }
  },
  log(type, method, obj = {}) {
    log('log', type, method, obj)
  },
  event(type, method, obj = {}) {
    log('event', type, method, obj)
  },
  error(type, method, obj = {}) {
    log('error', type, method, obj)
  },
  warn(type, method, obj = {}) {
    log('warn', type, method, obj)
  }
}