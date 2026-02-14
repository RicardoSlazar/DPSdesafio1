import { useState } from 'react'
import ContactList from './components/ContactList'
import './App.css'

function App() {
  const [contacts, setContacts] = useState([])
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    phone: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleAddContact = (e) => {
    e.preventDefault()

    if (!formData.name.trim() || !formData.lastName.trim() || !formData.phone.trim()) {
      alert('Por favor completa todos los campos')
      return
    }

    if (!/^\d+$/.test(formData.phone)) {
      alert('El teléfono debe contener solo números')
      return
    }

    const newContact = {
      id: Date.now(),
      name: formData.name.trim(),
      lastName: formData.lastName.trim(),
      phone: formData.phone.trim()
    }

    setContacts(prev => [...prev, newContact])
    setFormData({
      name: '',
      lastName: '',
      phone: ''
    })
  }


  return (
    <div className="app-container">
      <header className="app-header">
        <h1> Administrador de Contactos</h1>
        <p>Gestiona tus contactos de forma fácil y rápida</p>
      </header>

      <div className="app-content">
        {/* Formulario para agregar contacto */}
        <section className="form-section">
          <h2>Agregar Nuevo Contacto</h2>
          <form onSubmit={handleAddContact} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Nombre *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Ej: Papi"
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Apellido *</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Ej: Hernandez"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Teléfono *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Ej: +503 1234-5678"
              />
            </div>

            <button type="submit" className="btn-submit">
               Agregar Contacto
            </button>
          </form>
        </section>

        {/* Lista de contactos */}
        <ContactList
          contacts={contacts}
        />
      </div>
    </div>
  )
}

export default App
