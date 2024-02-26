import './Resume.css'
import { Education } from "./Targets/Education"
import { Experience } from "./Targets/Experience"
import { Skills } from './Targets/Skills'

export const Resume = () => {
  return (
    <div className="Page Resume">
      <h2 className='ResumeSubtitle'>Experience</h2>
      <Experience />

      <h2 className='ResumeSubtitle'>Education</h2>
      <Education />

      <h2 className='ResumeSubtitle'>Skills</h2>
      <Skills />
    </div>
  )
}
