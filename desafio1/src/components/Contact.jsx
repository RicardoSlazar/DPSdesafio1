import './Contact.css'

function Contact({ contact }) {
  return (
    <div className="contact-card">
      <div className="contact-info">
        <div className="contact-name">
          {contact.name} {contact.lastName}
        </div>
        <div className="contact-phone">
           {contact.phone}
        </div>
      </div>
    </div>
  )
}

export default Contact
