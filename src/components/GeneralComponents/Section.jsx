import { string, any } from 'prop-types'
import { SectionTitle } from './SectionTitle'

export const Section = ({ sectionName, children }) => (
    <section className='flex flex-col justify-center items-center w-layout'>
        <SectionTitle sectionName={sectionName} />
        {children}
    </section>
)


Section.propTypes = {
    sectionName: string,
    children: any
}