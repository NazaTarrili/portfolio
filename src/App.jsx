import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import { Home } from './components/Home/Home'
import { Portfolio } from './components/Portfolio/Portfolio'
import { Resume } from './components/Resume/Resume'
import { Services } from './components/Services/Services'
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/layout/Footer/Footer'
import { HeaderNav } from './components/layout/Header/HeaderNav/HeaderNav'

export const App = () => {
    return (
        <BrowserRouter>
            {/* Header and navigation */}
            <HeaderNav />

            {/* General content */}
            <section className="Content">
                <Routes>
                    <Route path='/' element={<Navigate to='/Home' />} />
                    <Route path='/Home' element={<Home />} />
                    <Route path='/Resume' element={<Resume />} />
                    <Route path='/Portfolio' element={<Portfolio />} />
                    <Route path='/Services' element={<Services />} />
                    <Route path='/Contact' element={<Contact />} />
                    <Route path='/*' element={<Navigate to={'/'} />} />
                </Routes>
            </section>

            {/* Footer */}
            <Footer />
        </BrowserRouter>
    )
}
