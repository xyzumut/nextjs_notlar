"use client"
import React from 'react'

const Error = (props) => {
    console.log(props)
    return (
        <div>
            Error
            <button onClick={() => {props.reset()}}>Reset</button>
        </div>
    )
}

export default Error