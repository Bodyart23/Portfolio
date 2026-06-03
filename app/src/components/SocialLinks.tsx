import iconGithub from '../assets/icon-github.svg'
import iconLinkedin from '../assets/icon-linkedin.svg'
import { GITHUB_URL, LINKEDIN_URL } from '../data/portfolio'

type SocialLinksProps = {
  'aria-label'?: string
}

export default function SocialLinks({
  'aria-label': ariaLabel = 'Social links',
}: SocialLinksProps) {
  return (
    <nav className="socials" aria-label={ariaLabel}>
      <a href={GITHUB_URL} aria-label="GitHub" target="_blank" rel="noopener noreferrer">
        <img src={iconGithub} alt="" />
      </a>
      <a
        href={LINKEDIN_URL}
        aria-label="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={iconLinkedin} alt="" />
      </a>
    </nav>
  )
}
