import { Link } from './Link/Link'
import './NavigationBar.css'

export const NavigationBar = () => {
    return (
        <nav className="NavigationBar">
            <ul>
                <Link path='/' text='Home' />
                <Link path='/Resume' text='Resume' />
                <Link path='/Portfolio' text='Portfolio' />
                <Link path='/Services' text='Services' />
                <Link path='/Contact' text='Contact' />
            </ul>
        </nav>
    )
}
