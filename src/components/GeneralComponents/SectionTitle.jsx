import { string } from 'prop-types'

export const SectionTitle = ({ sectionName }) => (
  <h2 className='text-white text-5xl mt-16 font-bold font'>{sectionName}</h2>
)

SectionTitle.propTypes = {
  sectionName: string
}