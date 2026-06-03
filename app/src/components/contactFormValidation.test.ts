import { describe, expect, it } from 'vitest'
import {
  getEmailErrorMessage,
  isEmailInvalid,
  isMessageInvalid,
  isNameInvalid,
} from './contactFormValidation'

describe('contactFormValidation', () => {
  it('rejects empty email', () => {
    expect(isEmailInvalid('')).toBe(true)
    expect(getEmailErrorMessage('')).toBe('This field is required')
  })

  it('rejects invalid email format', () => {
    expect(isEmailInvalid('not-an-email')).toBe(true)
    expect(getEmailErrorMessage('not-an-email')).toBe('Sorry, invalid format here')
  })

  it('accepts valid email', () => {
    expect(isEmailInvalid('user@example.com')).toBe(false)
  })

  it('rejects empty name and message', () => {
    expect(isNameInvalid('   ')).toBe(true)
    expect(isMessageInvalid('')).toBe(true)
  })
})
