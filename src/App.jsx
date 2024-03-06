import './App.css'
import { Header } from './components/Header/Header'
import { Experience } from './components/Experience/Experience'
import { Proyects } from './components/Proyects/Proyects'
import { Education } from './components/Education/Education'
import { Contact } from './components/Contact/Contact'

export const App = () => {
    return (
        <div className="App">
            <Header />
            <Experience />
            <Proyects />
            <Education />
            <Contact />
        </div>
    )
}
