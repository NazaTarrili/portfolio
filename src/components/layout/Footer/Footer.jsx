import './Footer.css'
import { useEffect, useState } from "react"

export const Footer = () => {
   
    const [year, setYear] = useState('')

    useEffect(() => {
        const date = new Date()
        setYear(date.getFullYear())
    }, [])

    return (
        <footer className="Footer">
            Nazareno&apos;s Web Portfolio. Software Developer &copy;{year}
        </footer>
    )
}
