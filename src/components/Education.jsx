import { studies } from '../data/education'

export const Education = () => {
  return (
    <section className="Section Experience">
      <h2 className='SectionTitle'>Education</h2>

      <div className='TimeLine'>
        {
          studies.map(study => {
            return (
              <div className='Education' key={study.id}>
                <h3 className='EducationTitle'>{study.title} at {study.institution}</h3>
                <p className='EducationTime'>{study.begin} - {study.end ? study.end : 'Present'}</p>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}
