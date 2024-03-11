import { proyects } from '../data/proyects'

export const Proyects = () => {
    return (
        <section className="Section Proyects">
            <h2 className='SectionTitle'>Proyects</h2>

            {
                proyects.map(proyect => {
                    return (
                        <div className='Proyect' key={proyect.id}>
                            <img className='ProyectImage' src={proyect.imageUrl} alt={proyect.name} />
                            <div className='ProyectInfo'>
                                <h3 className='ProyectName'>{proyect.name}</h3>
                                <p className='ProyectDescription'>{proyect.description}</p>
                                <a className='ProyectUrl' target='_blank' href={proyect.url}>Go to</a>
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}
