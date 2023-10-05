import React from "react"

export default function ContactCard() {

    const [contact, setContact] = React.useState({
        firstName: "Ricardo",
        lastName: "Padilla",
        phone: "+1 (469) 750-4357",
        email: "ricardo.padilla@autozone.com",
        isFavorite: false
    })

    let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"

    function toggleFavorite() {
        setContact(prevContact => {

            return {

                ...prevContact, 
                isFavorite: !prevContact.isFavorite
            }
        })
    }
    

    return (
        <main>
            <article className="card">
                <img src="store-arrival.jpg" className="card--image" />
                <div>
                    <img src={`../${starIcon}`} className="card--favorite" onClick={toggleFavorite}/>
                    <h2 className="card--name">{contact.firstName} {contact.lastName}</h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
            </article>
        </main>
    )
}