import './Contact.css'

export const Contact = () => {
  return (
    <div className="Page Contact">
      <h1 className="SectionHeader">Contact</h1>

      <div className='FormContainer'>
        <form
          className="ContactForm"
          action="mailto: nazatarrili.proyectos@gmail.com"
        >
          <input type="text" name="Name" placeholder="Name..." />
          <input type="text" name="Lastname" placeholder="Lastname..." />
          <input type="text" name="Email" placeholder="Email..." />
          <textarea name="Reason" placeholder="Reason for contact..." />
          <button type="submit" value='Send' name="Send">Send</button>
        </form>
      </div>

    </div>
  )
}

