import './Portfolio.css'
import { proyects } from '../../data/proyects'
import { Proyect } from './Proyect/Proyect'

export const Portfolio = () => {
  return (
    <div className="Page">
      <h1 className="SectionHeader">Portfolio</h1>

      {
        proyects.map(proyect => (
          <Proyect key={proyect.id} proyect={proyect} />
        ))
      }

    </div>
  )
}