import notes1 from '../assets/Notes-1.png'
import notes2 from '../assets/Notes-2.png'
import notes3 from '../assets/Notes-3.png'
import shortly1 from '../assets/Shortly-1.png'
import shortly2 from '../assets/Shortly-2.png'
import shortly3 from '../assets/Shortly-3.png'


export const GITHUB_URL_NOTES_APP = 'https://github.com/Bodyart23/note_taking_app'
export const LIVE_URL_NOTES_APP = 'https://note-taking-app-eight-alpha.vercel.app/auth/log-in'

export const GITHUB_URL_SHORTLY_LANDING = 'https://github.com/Bodyart23/url_shortener'
export const LIVE_URL_SHORTLY_LANDING = 'https://url-shortener-two-virid.vercel.app/'

export const GITHUB_URL = 'https://github.com/Bodyart23'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/bohdan-dehtiar-752086163/'

export type Skill = {
  name: string
  experience: string
}

export type Project = {
  title: string
  tech: string[]
  /** First image is the card thumbnail; all images open in the slideshow. */
  images: string[]
  liveUrl: string
  repoUrl: string
}

export const skills: Skill[] = [
  { name: 'HTML', experience: '4 Years Experience' },
  { name: 'CSS', experience: '4 Years Experience' },
  { name: 'JavaScript', experience: '4 Years Experience' },
  { name: 'Angular', experience: '4 Years Experience' },
  { name: 'React', experience: '1 Years Experience' },
  { name: 'NextJS', experience: '1 Years Experience' },
]

/** Update liveUrl and repoUrl with real demo and repository links when available. */
export const projects: Project[] = [
  {
    title: 'Notes Web App',
    tech: ['NextJS', 'MongoDB', 'NextAuth', 'TailwindCSS'],
    images: [notes1, notes2, notes3],
    liveUrl: LIVE_URL_NOTES_APP,
    repoUrl: GITHUB_URL_NOTES_APP,
  },
  {
    title: 'Shortly Landing Page',
    tech: ['React'],
    images: [shortly1, shortly2, shortly3],
    liveUrl: LIVE_URL_SHORTLY_LANDING,
    repoUrl: GITHUB_URL_SHORTLY_LANDING,
  },
]
