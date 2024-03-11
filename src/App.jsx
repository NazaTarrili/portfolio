import { Header } from './components/Header'
import { Experience } from './components/Experience'

export const App = () => {
    return (
        <div className="flex bg-black flex-col items-center p-9">
            <Header />
            <Experience />
        </div>
    )
}
