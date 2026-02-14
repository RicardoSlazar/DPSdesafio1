import Contact from './Contact'
import './ContactList.css'

function ContactList({ contacts }) {
  return (
    <div className="contact-list-container">
      <h2>Contactos Registrados</h2>
      {contacts.length === 0 ? (
        <p className="no-contacts">No hay contactos registrados aún.</p>
      ) : (
        <div className="contact-list">
          {contacts.map((contact) => (
            <Contact
              key={contact.id}
              contact={contact}
            />
          ))}
        </div>
      )}
      <div className="contact-stats">
        <p>Total de contactos: {contacts.length}</p>
      </div>
    </div>
  )
}

export default ContactList
