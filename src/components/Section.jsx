import PropTypes from 'prop-types'
import { SectionTitle } from './SectionTitle'

export const Section = ({ sectionName, children }) => {
    return (
        <section className='flex flex-col justify-center items-center w-layout'>
            <SectionTitle sectionName={sectionName} />
            {children}
        </section>
    )
}

Section.propTypes = {
    sectionName: PropTypes.string,
    children: PropTypes.element
}