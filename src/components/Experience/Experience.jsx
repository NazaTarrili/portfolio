import './Experience.css'
import { works } from '../../data/works'

export const Experience = () => {
  return (
    <section className="Section Experience">
      <h2 className='SectionTitle'>Experience</h2>

      <div className='TimeLine'>
        {
          works.map(work => {
            return (
              <div className='Work' key={work.id}>
                <h3 className='WorkTitle'>{work.position} at {work.company}</h3>
                <p className='WorkTime'>{work.begin} - {work.end ? work.end : 'Present'}</p>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}
