import { useEffect, useId, useRef, useState, type FormEvent } from 'react'
import './ContactForm.css'
import {
  getEmailErrorMessage,
  getFieldState,
  getMessageErrorMessage,
  getNameErrorMessage,
  isEmailInvalid,
  isMessageInvalid,
  isNameInvalid,
  MAX_EMAIL_LENGTH,
  MAX_MESSAGE_LENGTH,
  MAX_NAME_LENGTH,
  type FieldName,
} from './contactFormValidation'
import FormField from './FormField'

const FORM_SUBMIT_ID =
  import.meta.env.VITE_FORM_SUBMIT_ID ?? '6d4059a9eac2cc1417f31e020789f600'
const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL ?? ''
const FORM_SUBMIT_URL = `https://formsubmit.co/ajax/${encodeURIComponent(FORM_SUBMIT_ID)}`
const REQUEST_TIMEOUT_MS = 15_000
const SUCCESS_MESSAGE_DURATION_MS = 5_000

type SubmitStatus = 'idle' | 'success' | 'error'
type Touched = Record<FieldName, boolean>

const initialTouched: Touched = {
  name: false,
  email: false,
  message: false,
}

export default function ContactForm() {
  const nameId = useId()
  const emailId = useId()
  const messageId = useId()
  const statusId = useId()
  const honeypotId = useId()
  const statusRef = useRef<HTMLDivElement>(null)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [focusedField, setFocusedField] = useState<FieldName | null>(null)
  const [touched, setTouched] = useState<Touched>(initialTouched)
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle')

  useEffect(() => {
    if (submitStatus !== 'success') return

    const timer = window.setTimeout(() => {
      setSubmitStatus('idle')
    }, SUCCESS_MESSAGE_DURATION_MS)

    return () => window.clearTimeout(timer)
  }, [submitStatus])

  const nameInvalid = isNameInvalid(name)
  const emailInvalid = isEmailInvalid(email)
  const messageInvalid = isMessageInvalid(message)

  const showNameError = (touched.name || submitted) && nameInvalid
  const showEmailError = (touched.email || submitted) && emailInvalid
  const showMessageError = (touched.message || submitted) && messageInvalid

  const handleBlur = (field: FieldName) => {
    setFocusedField(null)
    setTouched((prev) => ({ ...prev, [field]: true }))
  }

  const resetForm = () => {
    setName('')
    setEmail('')
    setMessage('')
    setHoneypot('')
    setTouched(initialTouched)
    setSubmitted(false)
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
    setSubmitStatus('idle')
    setTouched({ name: true, email: true, message: true })

    if (nameInvalid || emailInvalid || messageInvalid) return

    if (honeypot.trim()) {
      resetForm()
      setSubmitStatus('success')
      return
    }

    const nameTrimmed = name.trim()
    const emailTrimmed = email.trim()
    const messageTrimmed = message.trim()

    setIsSubmitting(true)

    try {
      const response = await fetch(FORM_SUBMIT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: nameTrimmed,
          email: emailTrimmed,
          message: messageTrimmed,
          _subject: `Portfolio contact from ${nameTrimmed.slice(0, MAX_NAME_LENGTH)}`,
          _replyto: emailTrimmed,
          _honey: '',
          _template: 'table',
        }),
        signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
      })

      const data = (await response.json()) as { success?: string; message?: string }

      if (!response.ok || !data.success) {
        throw new Error(data.message ?? 'Failed to send message')
      }

      resetForm()
      setSubmitStatus('success')
      statusRef.current?.focus()
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('Contact form submission failed:', error)
      }
      setSubmitStatus('error')
      statusRef.current?.focus()
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <input
        id={honeypotId}
        type="text"
        name="_honey"
        className="honeypot"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
      />

      <FormField
        id={nameId}
        label="Name"
        name="name"
        placeholder="NAME"
        value={name}
        maxLength={MAX_NAME_LENGTH}
        state={getFieldState(
          'name',
          focusedField,
          showNameError,
          showEmailError,
          showMessageError,
        )}
        showError={showNameError}
        errorMessage={getNameErrorMessage(name)}
        disabled={isSubmitting}
        onChange={setName}
        onFocus={() => setFocusedField('name')}
        onBlur={() => handleBlur('name')}
        autoComplete="name"
      />

      <FormField
        id={emailId}
        label="Email"
        name="email"
        placeholder="EMAIL"
        value={email}
        maxLength={MAX_EMAIL_LENGTH}
        type="email"
        state={getFieldState(
          'email',
          focusedField,
          showNameError,
          showEmailError,
          showMessageError,
        )}
        showError={showEmailError}
        errorMessage={getEmailErrorMessage(email)}
        disabled={isSubmitting}
        onChange={setEmail}
        onFocus={() => setFocusedField('email')}
        onBlur={() => handleBlur('email')}
        autoComplete="email"
      />

      <FormField
        id={messageId}
        label="Message"
        name="message"
        placeholder="MESSAGE"
        value={message}
        maxLength={MAX_MESSAGE_LENGTH}
        multiline
        state={getFieldState(
          'message',
          focusedField,
          showNameError,
          showEmailError,
          showMessageError,
        )}
        showError={showMessageError}
        errorMessage={getMessageErrorMessage(message)}
        disabled={isSubmitting}
        onChange={setMessage}
        onFocus={() => setFocusedField('message')}
        onBlur={() => handleBlur('message')}
      />

      <div
        ref={statusRef}
        tabIndex={-1}
        className="form-status-region"
        aria-live="polite"
        aria-atomic="true"
      >
        {submitStatus === 'success' && (
          <p id={statusId} className="form-status form-status--success">
            Thanks! Your message was sent. I&apos;ll get back to you soon.
          </p>
        )}
        {submitStatus === 'error' && (
          <p id={statusId} className="form-status form-status--error" role="alert">
            Something went wrong. Please try again
            {CONTACT_EMAIL ? (
              <>
                {' '}
                or email me directly at{' '}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </>
            ) : null}
            .
          </p>
        )}
      </div>

      <button type="submit" className="form-submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending…' : 'Send message'}
      </button>
    </form>
  )
}
