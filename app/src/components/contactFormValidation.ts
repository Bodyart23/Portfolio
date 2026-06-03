export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
export const MAX_NAME_LENGTH = 100
export const MAX_EMAIL_LENGTH = 254
export const MAX_MESSAGE_LENGTH = 2000

export type FieldName = 'name' | 'email' | 'message'
export type FieldState = 'focus' | 'error' | 'default'

export function getEmailErrorMessage(email: string): string {
  const trimmed = email.trim()
  if (!trimmed) return 'This field is required'
  if (trimmed.length > MAX_EMAIL_LENGTH) return 'Email is too long'
  return 'Sorry, invalid format here'
}

export function getNameErrorMessage(name: string): string {
  const trimmed = name.trim()
  if (!trimmed) return 'This field is required'
  return 'Name is too long'
}

export function getMessageErrorMessage(message: string): string {
  const trimmed = message.trim()
  if (!trimmed) return 'This field is required'
  return 'Message is too long'
}

export function isNameInvalid(name: string): boolean {
  const trimmed = name.trim()
  return !trimmed || trimmed.length > MAX_NAME_LENGTH
}

export function isEmailInvalid(email: string): boolean {
  const trimmed = email.trim()
  return !trimmed || trimmed.length > MAX_EMAIL_LENGTH || !EMAIL_PATTERN.test(trimmed)
}

export function isMessageInvalid(message: string): boolean {
  const trimmed = message.trim()
  return !trimmed || trimmed.length > MAX_MESSAGE_LENGTH
}

export function getFieldState(
  field: FieldName,
  focusedField: FieldName | null,
  showNameError: boolean,
  showEmailError: boolean,
  showMessageError: boolean,
): FieldState {
  if (field === 'name' && showNameError) return 'error'
  if (field === 'email' && showEmailError) return 'error'
  if (field === 'message' && showMessageError) return 'error'
  if (focusedField === field) return 'focus'
  return 'default'
}
