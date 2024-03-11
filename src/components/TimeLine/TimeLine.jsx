import PropTypes from 'prop-types'
import { Line } from './Line'

export const TimeLine = ({ children }) => (
    <div className='mt-10 w-full flex flex-col relative items-center'>
        <Line />
        {children.map((child, i) => (
            <div key={i} className={`sm:w-full relative self-${i % 2 === 0 ? 'start' : 'end'} mt-5 mb-5 first:mt-10 last:mb-10`}>
                {child}
            </div>
        ))}
    </div>
)

TimeLine.propTypes = {
    children: PropTypes.element
}