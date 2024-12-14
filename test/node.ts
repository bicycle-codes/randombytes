import { test } from '@substrate-system/tapzero'
import randomBytes from '../src/node/index.js'

test('example', async t => {
    const randoms = randomBytes(10)
    t.ok(randoms instanceof Uint8Array,
        'should return some random bytes as a Uint8Array')
})
