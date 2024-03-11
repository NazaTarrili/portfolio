import { contacts } from "../data/contact"

export const Contact = () => {
    return (
        <section className="Section Contact">
            <h2 className='SectionTitle'>Contact</h2>
            <div className="ContactBar">
                {
                    contacts.map(contact => (
                        <div key={contact.id} className="IndividualContact">
                            <a target="_blank" href={contact.url}>
                                <img className='ContactImage' src={contact.imageUrl} alt={contact.name} />
                            </a>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
