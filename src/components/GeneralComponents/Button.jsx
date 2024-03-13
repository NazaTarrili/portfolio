import { string } from 'prop-types'

export const Button = ({ text, url }) => (
    <a 
        className='
            text-white
            bg-fall-600 
            w-24
            p-5 
            font-bold 
            uppercase 
            rounded-7 
            text-center 
            transition-all 
            duration-300 
            hover:bg-white 
            hover:text-fall-600 
            hover:translate-y-1
        ' 
        target='_blank'
        href={url}
    >{text}</a>
)


Button.propTypes = {
    text: string,
    url: string
}
