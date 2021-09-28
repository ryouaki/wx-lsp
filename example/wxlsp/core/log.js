import { getSessId } from './utils'
let logger = {
  cb: console.log
}

const _sess_id_ = getSessId()

function log (tag, from, method, obj) {
  logger.cb({
    tag: tag,
    from: from,
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
  log(from, method, obj = {}) {
    log('log', from, method, obj)
  },
  event(from, method, obj = {}) {
    log('event', from, method, obj)
  },
  error(from, method, obj = {}) {
    log('error', from, method, obj)
  },
  warn(from, method, obj = {}) {
    log('warn', from, method, obj)
  }
}