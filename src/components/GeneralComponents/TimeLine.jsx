import { array } from 'prop-types'

export const TimeLine = ({ children }) => (
    <div className='mt-10 w-full flex flex-col relative items-center'>
        {children.map((child, i) => (
            <div key={i} className={`sm:w-full sm:self-center relative ${i % 2 === 0 ? 'self-start' : 'self-end'} mt-8 mb-8 first:mt-0 last:mb-0`}>
                {child}
            </div>
        ))}
    </div>
)

TimeLine.propTypes = {
    children: array
}