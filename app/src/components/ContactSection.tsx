import patternRings from '../assets/pattern-rings.svg'
import ContactForm from './ContactForm'

export default function ContactSection() {
  return (
    <section id="contact" className="contact">
      <img src={patternRings} alt="" className="rings rings-bottom" />
      <div className="contact-copy">
        <h2>Contact</h2>
        <p>
          I would love to hear about your project and how I could help. Please fill in the
          form, and I&apos;ll get back to you as soon as possible.
        </p>
      </div>
      <ContactForm />
    </section>
  )
}
