import { NavLink } from "react-router-dom"
import PropTypes from 'prop-types'

export const Link = ({path, text}) => {
    const determineClass = ({isActive}) =>  {
        return isActive ? 'ActiveMenuLink' : ''
    }

    return (
        <li>
            <NavLink to={path} className={determineClass}>{text}</NavLink>
        </li>
    )
}

Link.propTypes = {
    path: PropTypes.string,
    text: PropTypes.string
}