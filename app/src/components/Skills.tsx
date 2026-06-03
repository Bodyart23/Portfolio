import patternRings from '../assets/pattern-rings.svg'
import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <section className="skills" aria-label="Skills">
      <img src={patternRings} alt="" className="rings rings-middle" />
      {skills.map((skill) => (
        <article key={skill.name} className="skill-card">
          <h2>{skill.name}</h2>
          <p>{skill.experience}</p>
        </article>
      ))}
    </section>
  )
}
