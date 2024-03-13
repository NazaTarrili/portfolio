import { contacts } from "../data/contact"
import { Section } from "./GeneralComponents/Section"

export const Contact = () => (
    <Section sectionName='Contact'>
        <div className="flex justify-center items-center">
            {contacts.map(contact => (
                <div key={contact.id} className="text-center p-16">
                    <a target="_blank" href={contact.url}>
                        <img className="w-16 h-16 transition-all duration-300 hover:translate-y-1" src={contact.imageUrl} alt={contact.name} />
                    </a>
                </div>
            ))}
        </div>
    </Section>
)
