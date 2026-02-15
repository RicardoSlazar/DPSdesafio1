import './Contact.css'

function Contact({ contact, onDelete, onToggleFavorite }) {
  return (
    <div className={`contact-card ${contact.isFavorite ? 'favorite' : ''}`}>
      {contact.isFavorite && <span className="favorite-badge">⭐ Favorito</span>}
      <div className="contact-info">
        <div className="contact-name">
          {contact.name} {contact.lastName}
        </div>
        <div className="contact-phone">
           {contact.phone}
        </div>
      </div>
      <div className="contact-actions">
        <button
          className={`btn-favorite ${contact.isFavorite ? 'is-favorite' : ''}`}
          onClick={() => onToggleFavorite(contact.id)}
          title={contact.isFavorite ? 'Remover de favoritos' : 'Agregar a favoritos'}
        >
          {contact.isFavorite ? '★' : '☆'}
        </button>
        <button
          className="btn-delete"
          onClick={() => onDelete(contact.id)}
          title="Eliminar contacto"
        >
          🗑️
        </button>
      </div>
    </div>
  )
}

export default Contact
