import { React, useState } from 'react'
// import Footer from './../../Component/Footer/Footer'
import Navbar from './../../Component/Navbar/Navbar'
import './Contact.css'
import ContactCard from '../../Component/ContactCard/ContactCard';
import showToast from 'crunchy-toast'

function Contact() {
  const [contact, setContact] = useState([
    {
      name: 'Shivkanya',
      mble: 7768975262,
      email: 'shivkanya@gmail.com'
    },
    {
      name: 'Nandini',
      mble: 7854121454,
      email: 'nandini@gmail.com'
    },
    {
      name: 'Revati',
      mble: 9814165825,
      email: 'revati@gmail.com'
    }
  ]);

  const [name, setName] = useState('')
  const [mble, setMble] = useState('')
  const [email, setEmail] = useState('')

  const addContact = () => {

    if (!name) {
      showToast('Name required', 'alert', 2000)
      return;
    }
    if (!mble) {
      showToast('Mobile number required', 'alert', 2000)
      return;
    }
    if (!email) {
      showToast('Email required', 'alert', 2000)
      return;
    }

    const obj = {
      name: name,
      mble: mble,
      email: email
    }

    const newContact = [...contact, obj];

    setContact(newContact)
    saveToLocalStorage(newContact);

    showToast('Contact Added Successfully', 'success', 5000);

    setName('')
    setMble('')
    setEmail('')
  }
  const deleteContact = (mbleno) =>{
    let deleteindex = -1;
    contact.forEach((contact, index) =>
    {
      if(contact.mble === mbleno){
        deleteindex = index;
      }
    })

    contact.splice(deleteindex,1);
    saveToLocalStorage(contact)
    showToast('Contact deleted Successfully','success',2000)
    setContact([...contact])
  }
  const saveToLocalStorage = (contacts) => {
    localStorage.setItem('contacts',JSON.stringify(contacts))
  }
  const loadContact = () => {
    const contactData = JSON.parse(localStorage.getItem('contacts'));

    if(contactData){
      setContact(contactData);
    }
  }
  useEffect(()=> {
    loadContact();
  },[])

  return (
    <div className='Contacts'>
      <Navbar />

      <h1 className='app-title'>Contact App</h1>

      <div className='contact-container'>

        <div className='show-container'>
          <h2 className='card-title'>Show Contacts</h2>
          {
            contact.map((contact, index) => {
              return (
                <ContactCard key={index}
                  name={contact.name}
                  mble={contact.mble}
                  email={contact.email}
                  deleteContact={deleteContact}
                />
              )
            })
          }
        </div>

        <div className='add-container'>
          <h2>Add Contacts</h2>
          <form>
            <input type='text'
              placeholder='Name'
              className='user-input'
              onChange={(e) =>
              (
                setName(e.target.value)
              )}
              value={name}
            />

            <input type='text'
              placeholder='Mobile number'
              className='user-input'
              onChange={(e) =>
              (
                setMble(e.target.value)
              )}
              value={mble}
            />

            <input type='email'
              placeholder='Email'
              className='user-input'
              onChange={(e) =>
              (
                setEmail(e.target.value)
              )}
              value={email}
            />

            <button
              type='button'
              className='add-btn'
              onClick={addContact}
            >Add Contact</button>

          </form>
        </div>

      </div>

      {/* <Footer /> */}
    </div>
  )
}

export default Contact
