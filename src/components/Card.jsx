import PropTypes from 'prop-types'

export const Card = ({superiorText, inferiorText}) => {
    return (
        <div className='flex items-center mb-8 last:mb-0 bg-fall p-9 rounded-8 text-center justify-center w-full md:w-72 lg:w-96'>
            <div >
                <h3 className='font-bold text-black text-2xl'>{superiorText}</h3>
                <p className='text-white'>{inferiorText}</p>
            </div>
        </div>
    )
}

Card.propTypes = {
    superiorText: PropTypes.string,
    inferiorText: PropTypes.string
}