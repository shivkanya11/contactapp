import React from 'react'
import './ContactCard.css'

function ContactCard({name, mble,email,deleteContact}) {
    return (
        <div>
            <div className='card'>
                <p className='contact-name'>🎅  {name}</p>
                <p className='contact-mble'> 📱&nbsp; {mble}</p>
                <p className='contact-email'>📬 {email}</p>
                <spn className='contact-bin'
                onClick={()=>{
                    deleteContact(mble)
                }}
                >🗑</spn>
            </div>
        </div>
    )
}

export default ContactCard
