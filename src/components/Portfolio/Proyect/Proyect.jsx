import './Proyect.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const Proyect = ({ proyect }) => {
    return (
        <article className='Proyect'>
            <div className='Headline'>
                <h2>{proyect.name}</h2>
                <button><Link to={proyect.url} target='_blank'>&gt;</Link></button>
            </div>
            <h4>{proyect.description}</h4>
            <h3>Stack</h3>
            <ul> {
                proyect.stack.map((tecnology, index) => (
                    <li className='TechStack' key={index}>{tecnology}</li>
                ))
            } </ul>
            <h3>Categories</h3>
            <ul> {
                proyect.categories.map((category, index) => (
                    <li className='Category' key={index}>{category}</li>
                ))
            }</ul>
        </article>
    )
}

Proyect.propTypes = {
    proyect: PropTypes.object
}