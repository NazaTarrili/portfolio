import PropTypes from 'prop-types'

export const TimeLine = ({ children }) => (
    <div className='mt-10 w-full flex flex-col relative items-center'>
        {children.map((child, i) => (
            <div key={i} className={`sm:w-full relative ${i % 2 === 0 ? 'self-start' : 'self-end'} mt-8 mb-8 first:mt-10 last:mb-10`}>
                {child}
            </div>
        ))}
    </div>
)

TimeLine.propTypes = {
    children: PropTypes.array
}