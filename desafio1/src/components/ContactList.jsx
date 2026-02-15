import Contact from './Contact'
import './ContactList.css'

function ContactList({ contacts, onDeleteContact, onToggleFavorite }) {
  const sortedContacts = [...contacts].sort((a, b) => {
    if (a.isFavorite === b.isFavorite) return 0
    return a.isFavorite ? -1 : 1
  })

  return (
    <div className="contact-list-container">
      <h2>Contactos Registrados</h2>
      {contacts.length === 0 ? (
        <p className="no-contacts">No hay contactos registrados aún.</p>
      ) : (
        <div className="contact-list">
          {sortedContacts.map((contact) => (
            <Contact
              key={contact.id}
              contact={contact}
              onDelete={onDeleteContact}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      )}
      <div className="contact-stats">
        <p>Total de contactos: {contacts.length}</p>
        <p>Favoritos: {contacts.filter(c => c.isFavorite).length}</p>
      </div>
    </div>
  )
}

export default ContactList
