import './Service.css'
import PropTypes from 'prop-types'

export const Service = ({ title, description }) => {
    return (
        <article className="Service">
            <h2>{title}</h2>
            <p>{description}</p>
        </article>
    )
}

Service.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
}