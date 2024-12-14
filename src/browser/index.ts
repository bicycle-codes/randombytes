// limit of Crypto.getRandomValues()
// https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues
const MAX_BYTES = 65536

// Node supports requesting up to this number of bytes
// https://github.com/nodejs/node/blob/master/lib/internal/crypto/random.js#L48
const MAX_UINT32 = 4294967295

export function randomBytes (size:number):Uint8Array {
    if (!crypto || !crypto.getRandomValues) {
        throw new Error('Secure random number generation is not supported' +
            'by this browser.\nUse Chrome, Firefox or Internet Explorer 11')
    }

    if (size <= 0) {
        throw new Error('Must pass a size greater than zero')
    }

    if (size > MAX_BYTES) throw new Error('requested too many random bytes')

    if (size > MAX_UINT32) {
        throw new RangeError('requested too many random bytes')
    }

    const arr = new Uint8Array(size)
    return crypto.getRandomValues(arr)
}

export default randomBytes
