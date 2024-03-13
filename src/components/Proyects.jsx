import { proyects } from '../data/proyects'
import { Button } from './GeneralComponents/Button'
import { Section } from './GeneralComponents/Section'

export const Proyects = () => (
    <Section sectionName='Proyects'> {
        proyects.map(({ id, name, description, url, imageUrl }) => (
            <div className='w-full mt-14 flex flex-col lg:flex-row items-center p-4' key={id}>
                <div className="
                    flex
                    items-center 
                    justify-center
                    rounded-full
                    border-2
                    border-white bg-fall
                    w-40 md:w-52 lg:w-64
                    h-40 md:h-52 lg:h-64
                    mb-5 lg:mb-0
                ">
                    <img 
                        className='w-24 md:w-32 lg:w-36' 
                        src={imageUrl}
                        alt={name}
                    />
                </div>

                <div className='lg:ml-12 text-center lg:text-left lg:w-layout'>
                    <h3 className='text-white text-2xl mb-4'>{name}</h3>
                    <p className='text-white text-xl mb-8'>{description}</p>
                    <Button text='go to' url={url} />
                </div>
            </div>
        ))
    } </Section>
)
