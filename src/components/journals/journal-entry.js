import React from 'react'

export const JournalEntry = props => {
    return(
        <div>
            {/* <h1>Hi There</h1> */}
            <h2>{props.title}</h2>
            {/* <p>Some Awesome Content</p> */}
            <h4>{props.content}</h4>
            <h4>{props.status}</h4>
        </div>
    )
} 

