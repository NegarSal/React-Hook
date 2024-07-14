import React, { useState } from 'react'

function HookCounterThree() {

    const [name, setName] = useState({ fristName: '', lastName: '' })
    return (
        <form>
            <input
                type='text'
                value={name.fristName}
                onChange={e => setName({ ...name, fristName: e.target.value })}
            />
            <input
                type='text'
                value={name.lastName}
                onChange={e => setName({ ...name, lastName: e.target.value })}
            />
            <h2>Your first name is - {name.fristName}</h2>
            <h2>Your last name is - {name.lastName}</h2>
        </form>
    )
}

export default HookCounterThree
