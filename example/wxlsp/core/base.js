import ctx from './context'
import {
    log,
    event,
    error,
    warn
} from './log'

module.exports = class Base {
    constructor() {}

    wxApi() {
        return ctx
    }

    getLogger() {
        return {
            log,
            event,
            error,
            warn
        }
    }
}

module.exports.injectLifeApi = function (lifeApis, target, src, tag) {
    lifeApis.forEach((key) => {
        let cb = src[key]
        target[key] = function (opts = {}) {
            event(tag, key, opts)
            const s = Date.now()
            let ret = null
            if (cb) {
                ret = cb.call(this, opts)
            }
            log(tag, key, {
                dura: Date.now() - s,
                ...opts
            })
            return ret
        }
    })
}

module.exports.injectEventApi = function (eventApis, target, src, tag, isError = false) {
    eventApis.forEach((key) => {
        let cb = src[key]
        target[key] = function (opts = {}) {
            (!isError) && event(tag, key, opts)
            let ret = null
            if (cb) {
                ret = cb.call(this, opts)
            }
            isError && error(tag, key, {
                errMsg: opts
            })
            return ret
        }
    })
}