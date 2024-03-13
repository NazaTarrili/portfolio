import { string } from 'prop-types'

export const Card = ({ superiorText, inferiorText }) => {
    return (
        <div className='flex items-center mb-8 last:mb-0 bg-gradient-to-t from-fall-700 to-fall-300 p-9 rounded-8 text-center justify-center w-full md:w-80 md:p-10 lg:w-104 lg:p-12'>
            <div >
                <h3 className='font-bold text-black text-2xl'>{superiorText}</h3>
                <p className='text-white text-xl font-semibold mt-8'>{inferiorText}</p>
            </div>
        </div>
    )
}

Card.propTypes = {
    superiorText: string,
    inferiorText: string
}