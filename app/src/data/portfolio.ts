import project1Large from '../assets/thumbnail-project-1-large.webp'
import project2Large from '../assets/thumbnail-project-2-large.webp'
import project3Large from '../assets/thumbnail-project-3-large.webp'
import project4Large from '../assets/thumbnail-project-4-large.webp'
import project5Large from '../assets/thumbnail-project-5-large.webp'
import project6Large from '../assets/thumbnail-project-6-large.webp'

export const GITHUB_URL = 'https://github.com/Bodyart23'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/bohdan-dehtiar-752086163/'

export type Skill = {
  name: string
  experience: string
}

export type Project = {
  title: string
  tech: string[]
  image: string
  liveUrl: string
  repoUrl: string
}

export const skills: Skill[] = [
  { name: 'HTML', experience: '4 Years Experience' },
  { name: 'CSS', experience: '4 Years Experience' },
  { name: 'JavaScript', experience: '4 Years Experience' },
  { name: 'Angular', experience: '4 Years Experience' },
  { name: 'React', experience: '1 Years Experience' },
]

/** Update liveUrl and repoUrl with real demo and repository links when available. */
export const projects: Project[] = [
  {
    title: 'Design Portfolio',
    tech: ['HTML', 'CSS'],
    image: project1Large,
    liveUrl: GITHUB_URL,
    repoUrl: GITHUB_URL,
  },
  {
    title: 'E-learning Landing Page',
    tech: ['HTML', 'CSS'],
    image: project2Large,
    liveUrl: GITHUB_URL,
    repoUrl: GITHUB_URL,
  },
  {
    title: 'Todo Web App',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: project3Large,
    liveUrl: GITHUB_URL,
    repoUrl: GITHUB_URL,
  },
  {
    title: 'Entertainment Web App',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: project4Large,
    liveUrl: GITHUB_URL,
    repoUrl: GITHUB_URL,
  },
  {
    title: 'Memory Game',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: project5Large,
    liveUrl: GITHUB_URL,
    repoUrl: GITHUB_URL,
  },
  {
    title: 'Art Gallery Showcase',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: project6Large,
    liveUrl: GITHUB_URL,
    repoUrl: GITHUB_URL,
  },
]
