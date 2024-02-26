import { works } from '../../../data/works'
import './TargetSkills.css'

export const Experience = () => {
    return (
        <div className='Experience'>
            {
                works.map(work => (
                    <article className='Target' key={work.id}>
                        <h3>{work.company}</h3>
                        <h4>{work.position}</h4>
                        <h6>{work.begin} - {work.end ? work.end : 'Present'}</h6>
                        <h5>{work.description}</h5>
                    </article>
                ))
            }
        </div>
    )
}