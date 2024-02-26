import { education } from '../../../data/education'
import './TargetSkills.css'

export const Education = () => {
    return (
        <div className='Experience'>
            {
                education.map(education => (
                    <article className='Target' key={education.id}>
                        <h3>{education.institution}</h3>
                        <h4>{education.title}</h4>
                        <h6>{education.begin} - {education.end} / {education.status}</h6>
                        <h5>{education.description}</h5>
                        <h6>{education.documents ? education.documents : null}</h6>
                    </article>
                ))
            }
        </div>
    )
}