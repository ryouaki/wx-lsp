// from: https://github.com/ryouaki/lsp-uuid
const BASE_LENGTH = 41
const COUNT_LENGTH = 18

function leftZero(src, size) {
    let target = ''
    for (let i = 0; i < size; i++) {
        target += '0'
    }
    return target + src
}

let count = 0
let lastTime = 0
function uuid(st) {
    let now = (st !== undefined) ? st : Date.now();
    let n = now.toString(2)
    if (n.length < BASE_LENGTH) {
        n = leftZero(n, BASE_LENGTH)
    }

    let c = Number(count).toString(2)
    if (c.length < COUNT_LENGTH) {
        c = leftZero(c, COUNT_LENGTH - c.length)
    }

    count++
    if ((now - lastTime) >= 1000) {
        lastTime = now
        count = 0
    }

    let tmp = '0' + n + c
    let target = ''
    const loop = (BASE_LENGTH + COUNT_LENGTH + 1)
    for (let i = 0; i < loop; i = i + 4) {
        target += parseInt(tmp.substr(i, 4), 2).toString(16)
    }
    return target
}

function parseUUID(uuid) {
    const loop = (BASE_LENGTH + COUNT_LENGTH + 1) / 4
    if (loop != uuid.length) {
        return undefined;
    }
    let target = ''
    for (let i = 0; i < loop; i++) {
        let hexStr = parseInt(uuid.charAt(i), 16).toString(2)
        target += leftZero(hexStr, 4 - hexStr.length)
    }

    const stamp = target.substr(1, BASE_LENGTH)
    const count = target.substr(1 + BASE_LENGTH, COUNT_LENGTH)
    return {
        flg: 0,
        timestamp: parseInt(stamp, 2),
        count: parseInt(count, 2)
    }
}

let _sess_id_ = uuid()

module.exports = {
    uuid: uuid,
    parseUUID: parseUUID,
    getSessId() {
        return _sess_id_
    },
    mergeProps(target, src, excludes = []) {
        let source = src
        while (source.__proto__!= null &&
            source.__proto__.constructor.name != 'Object' && 
            source.__proto__.constructor.name != 'Function') {
            let keys = Object.getOwnPropertyNames(source.__proto__) 
            keys.forEach((key) => {
                if (excludes.indexOf(key) < 0) {
                    let cb = src[key]
                    target[key] = function () {
                        return cb.call(this, arguments)
                    }
                }
            })
            source = source.__proto__
        }
    }
}