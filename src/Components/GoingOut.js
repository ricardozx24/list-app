import React from "react"

export default function GoingOut() {
    
    const [isGoingOut, setIsGoingOut] = React.useState(true)
    

    function changeMind() {
        setIsGoingOut(prevState => !prevState)
    }

return (
    <div className="going-out">
        <h1 className="going-out--title">Do I feel like going out for lunch?</h1>
        <div className="going-out--value" onClick={changeMind} >
            <h1>{isGoingOut ? "Yes" : "No"}</h1>
        </div>
    </div>
)}