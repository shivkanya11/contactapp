import React from 'react'
import './ContactCard.css'

function ContactCard({name, mble,email,deleteContact, editContact, index}) {
    return (
        <div>
            <div className='card'>
                <p className='contact-name'>🎅  {name}</p>
                <p className='contact-mble'> 📱&nbsp; {mble}</p>
                <p className='contact-email'>📬 {email}</p>
                <spn className='contact-btn'
                onClick={()=>{
                    deleteContact(mble)
                }}
                >🗑</spn>
                <spn className='edit-btn'
                onClick={()=>{
                    editContact(index)
                }}
                >🖊️</spn>
            </div>
        </div>
    )
}

export default ContactCard
