import { works } from '../data/works'
import { Card } from './Card'
import { Section } from './Section'
import { TimeLine } from './TimeLine/TimeLine'

export const Experience = () => {
  return (
    <Section sectionName='Experience'>
      <TimeLine>
        {works.map(work => (
          <Card
            key={work.id}
            superiorText={`${work.position} at ${work.company}`}
            inferiorText={`${work.begin} - ${work.end ? work.end : 'Present'}`}
          />
        ))}
      </TimeLine>
    </Section>
  )
}