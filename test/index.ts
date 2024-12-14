import { test } from '@substrate-system/tapzero'
import randomBytes from '../src/browser/index.js'

test('example', async t => {
    t.ok('ok', 'should be an example')
    const randoms = randomBytes(10)
    t.ok(randoms instanceof Uint8Array,
        'should return some random bytes as a buffer')
})
