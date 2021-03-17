import React from 'react'

export default function Display(props) {

    return (
        <div>
            <h2>{props.result}</h2>
        </div>
    )
}

Display.defaultProps = {
    result: '0'
}

Display.propTypes = {
    result: propTypes.string
}