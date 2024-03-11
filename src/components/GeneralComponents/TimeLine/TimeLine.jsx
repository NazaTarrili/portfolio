import PropTypes from 'prop-types'
import { Line } from './Line'
import { TipCircle } from './TipCircle'

export const TimeLine = ({ children }) => (
    <div className='mt-10 w-full flex flex-col relative items-center'>
        <TipCircle />
        <Line />
        {children.map((child, i) => (
            <div key={i} className={`sm:w-full relative ${i % 2 === 0 ? 'self-start' : 'self-end'} mt-5 mb-5 first:mt-10 last:mb-10`}>
                {child}
            </div>
        ))}
        <TipCircle />
    </div>
)

TimeLine.propTypes = {
    children: PropTypes.array
}