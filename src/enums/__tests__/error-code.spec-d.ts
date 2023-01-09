/**
 * @file Type Tests - ErrorCode
 * @module errnode/enums/tests/unit-d/ErrorCode
 */

import type TestSubject from '../error-code'

describe('unit-d:enums/ErrorCode', () => {
  it('should have members of type Uppercase<string>', () => {
    // Arrange
    type Key = keyof typeof TestSubject

    // Expect
    expectTypeOf<Key>().toMatchTypeOf<Uppercase<string>>()
    expectTypeOf<TestSubject>().toMatchTypeOf<Key>()
    expectTypeOf<(typeof TestSubject)[Key]>().toEqualTypeOf<TestSubject>()
  })
})
