import { contacts } from "../data/contact"
import { Section } from "./GeneralComponents/Section"

export const Contact = () => (
    <Section sectionName='Contact'>
        <div className="flex justify-center items-center flex-row flex-wrap">
            {contacts.map(contact => (
                <div key={contact.id} className="text-center p-5 md:p-8 lg:p-14">
                    <a target="_blank" href={contact.url}>
                        <img className="w-16 h-16 transition-all duration-300 hover:translate-y-1" src={contact.imageUrl} alt={contact.name} />
                    </a>
                </div>
            ))}
        </div>
    </Section>
)
