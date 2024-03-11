import { proyects } from '../data/proyects'
import { Section } from './GeneralComponents/Section'

export const Proyects = () => {
    return (
        <Section sectionName='Proyects'>
            {
                proyects.map(proyect => (
                    <div className='w-full mt-14 flex flex-col' key={proyect.id}>
                        {/* <img className='' src={proyect.imageUrl} alt={proyect.name} /> */}
                            <h3 className='text-white text-3xl'>{proyect.name}</h3>
                            <p className='text-white text-xl'>{proyect.description}</p>
                            <a className='text-white bg-fall-600 w-24 p-5 font-bold uppercase rounded-7' target='_blank' href={proyect.url}>Go to</a>
                    </div>
                ))
            }
        </Section>
    )
}
