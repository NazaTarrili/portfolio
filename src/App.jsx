import './App.css'
import { Header } from './components/Header/Header'
import { Experience } from './components/Experience/Experience'
import { Proyects } from './components/Proyects/Proyects'

export const App = () => {
    return (
        <div className="App">
            <Header />
            <Experience />
            <Proyects />
        </div>
    )
}
