import '../Resume.css'
import { skills } from "../../../data/skills"

export const Skills = () => {
    return (
        <ul className='Skills'>
            {
                skills.map((skill, index) => <li key={index}>{skill}</li>)
            }
        </ul>
    )
}
