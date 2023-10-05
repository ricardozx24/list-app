import React from "react";

export default function ImportanceOfState() {
    const [isImportant, setIsImportant] = React.useState("Yes")
   
    function handleClick() {
        setIsImportant(prevState => !prevState)
    }

    return (
        <div className="state">
            <h1 className="stte--title">Is State Important to know?</h1>
            <div className="state--value" onClick={handleClick}>
                <h1>{isImportant ? "Yes" : "No"}</h1>
            </div>
        </div>
    )
}