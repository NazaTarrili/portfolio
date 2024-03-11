import PropTypes from 'prop-types'

export const SectionTitle = ({sectionName}) => {
  return (
    <h2 className='text-white text-4xl mt-16 font-bold font'>{sectionName}</h2>
  )
}

SectionTitle.propTypes = {
    sectionName: PropTypes.string
}