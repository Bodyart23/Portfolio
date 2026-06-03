import profileImage from '../assets/image-profile.webp'
import patternCircle from '../assets/pattern-circle.svg'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <h1>
          Nice to meet you!
          <br />
          I&apos;m <span>Bohdan Dehtiar</span>.
        </h1>
        <p>
          Based in the UA, I&apos;m a front-end developer passionate about building
          accessible web apps that users love.
        </p>
        <a href="#contact" className="link-cta">
          Contact me
        </a>
      </div>
      <div className="hero-image">
        <img src={patternCircle} alt="" className="circle hero-circle" />
        <img
          src={profileImage}
          alt="Bohdan Dehtiar"
          className="photo"
          loading="eager"
          fetchPriority="high"
        />
      </div>
    </section>
  )
}
