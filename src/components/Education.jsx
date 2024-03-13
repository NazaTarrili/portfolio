import { studies } from '../data/education'
import { Card } from './GeneralComponents/Card'
import { Section } from './GeneralComponents/Section'
import { TimeLine } from './GeneralComponents/TimeLine'

export const Education = () => (
  <Section sectionName='Education'>
    <TimeLine>
      {studies.map(study => (
        <Card
          key={study.id}
          superiorText={`${study.title} at ${study.institution}`}
          inferiorText={`${study.begin} - ${study.end ? study.end : 'Present'}`}
        />
      ))}
    </TimeLine>
  </Section>
)
