import { Header } from './components/Header'
import { Experience } from './components/Experience'
import { Proyects } from './components/Proyects'
import { Education } from './components/Education'
import { Contact } from './components/Contact'

export const App = () => {
    return (
        <div className="flex flex-col items-center p-9 bg-gradient-to-t from-black to-fall">
            <Header />
            <Experience />
            <Proyects />
            <Education />
            <Contact />
        </div>
    )
}
