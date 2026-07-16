import { useEffect, useId, useRef, useState } from 'react'

type ProjectLightboxProps = {
  title: string
  images: string[]
  initialIndex?: number
  onClose: () => void
}

export default function ProjectLightbox({
  title,
  images,
  initialIndex = 0,
  onClose,
}: ProjectLightboxProps) {
  const [activeIndex, setActiveIndex] = useState(initialIndex)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const titleId = useId()
  const hasMultiple = images.length > 1

  function goTo(nextIndex: number) {
    const length = images.length
    setActiveIndex(((nextIndex % length) + length) % length)
  }

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose()
        return
      }
      if (!hasMultiple) return
      if (event.key === 'ArrowLeft') {
        setActiveIndex((current) => (current - 1 + images.length) % images.length)
      }
      if (event.key === 'ArrowRight') {
        setActiveIndex((current) => (current + 1) % images.length)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [hasMultiple, images.length, onClose])

  return (
    <div
      className="project-lightbox"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div className="project-lightbox__panel">
        <div className="project-lightbox__header">
          <p id={titleId} className="project-lightbox__title">
            {title}
            <span className="project-lightbox__counter">
              {activeIndex + 1} / {images.length}
            </span>
          </p>
          <button
            ref={closeButtonRef}
            type="button"
            className="project-lightbox__close"
            onClick={onClose}
            aria-label="Close slideshow"
          >
            ×
          </button>
        </div>

        <div className="project-lightbox__stage">
          {hasMultiple && (
            <button
              type="button"
              className="project-lightbox__nav project-lightbox__nav--prev"
              onClick={() => goTo(activeIndex - 1)}
              aria-label="Previous image"
            >
              <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                <path
                  d="M10.5 3.5 5.5 8l5 4.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}

          <img
            src={images[activeIndex]}
            alt={`${title} screenshot ${activeIndex + 1} of ${images.length}`}
            className="project-lightbox__image"
          />

          {hasMultiple && (
            <button
              type="button"
              className="project-lightbox__nav project-lightbox__nav--next"
              onClick={() => goTo(activeIndex + 1)}
              aria-label="Next image"
            >
              <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                <path
                  d="M5.5 3.5 10.5 8l-5 4.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
        </div>

        {hasMultiple && (
          <div className="project-lightbox__dots" role="tablist" aria-label="Slideshow slides">
            {images.map((_, index) => (
              <button
                key={`${title}-dot-${index}`}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={`Show image ${index + 1}`}
                className={
                  index === activeIndex
                    ? 'project-lightbox__dot project-lightbox__dot--active'
                    : 'project-lightbox__dot'
                }
                onClick={() => goTo(index)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
