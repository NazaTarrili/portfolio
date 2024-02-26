import './HeaderNav.css'
import { Logo } from '../Logo/Logo'
import { NavigationBar } from '../NavigationBar/NavigationBar'

export const HeaderNav = () => {
    return (
        <header className='Header'>
            <Logo />
            <NavigationBar />
        </header>
    )
}
