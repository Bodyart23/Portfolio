import type { FieldState } from './contactFormValidation'

function ErrorIcon() {
  return (
    <svg
      className="field-error-icon"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="12" fill="#FF6F5E" />
      <path d="M12 7v6M12 16.5v.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

type FormFieldProps = {
  id: string
  label: string
  name: string
  placeholder: string
  value: string
  maxLength: number
  state: FieldState
  showError: boolean
  errorMessage: string
  disabled: boolean
  onChange: (value: string) => void
  onFocus: () => void
  onBlur: () => void
  type?: 'text' | 'email'
  multiline?: boolean
  rows?: number
  autoComplete?: string
}

export default function FormField({
  id,
  label,
  name,
  placeholder,
  value,
  maxLength,
  state,
  showError,
  errorMessage,
  disabled,
  onChange,
  onFocus,
  onBlur,
  type = 'text',
  multiline = false,
  rows = 4,
  autoComplete,
}: FormFieldProps) {
  const fieldClass = multiline
    ? `field field--message field--${state}`
    : `field field--${state}`

  return (
    <div className={fieldClass}>
      <label htmlFor={id} className="visually-hidden">
        {label}
      </label>
      <div className="field-control">
        {multiline ? (
          <textarea
            id={id}
            name={name}
            placeholder={placeholder}
            rows={rows}
            value={value}
            maxLength={maxLength}
            onChange={(e) => onChange(e.target.value)}
            onFocus={onFocus}
            onBlur={onBlur}
            disabled={disabled}
            aria-invalid={showError}
            aria-describedby={showError ? `${id}-error` : undefined}
          />
        ) : (
          <input
            id={id}
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            maxLength={maxLength}
            onChange={(e) => onChange(e.target.value)}
            onFocus={onFocus}
            onBlur={onBlur}
            autoComplete={autoComplete}
            disabled={disabled}
            aria-invalid={showError}
            aria-describedby={showError ? `${id}-error` : undefined}
          />
        )}
        {showError && <ErrorIcon />}
      </div>
      {showError && (
        <p id={`${id}-error`} className="field-error-message" role="alert">
          {errorMessage}
        </p>
      )}
    </div>
  )
}
