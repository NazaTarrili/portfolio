import { Header } from './components/Header'
import { Experience } from './components/Experience'
import { Proyects } from './components/Proyects'

export const App = () => {
    return (
        <div className="flex flex-col items-center p-9 bg-gradient-to-t from-black to-fall">
            <Header />
            <Experience />
            <Proyects />
        </div>
    )
}
