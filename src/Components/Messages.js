import React from 'react'

export default function Messages() {
    const [messages, setMessages] = React.useState(["a", "b", "c"])

    
    return (
        <div className='messages'>
            {
            messages.length === 0 ?
            <h1>No unread messages.</h1> :
            <h1>You have {messages.length} unread {messages.length > 1 ? "messages" : "message"}</h1>
            }
        </div>
    )
}