import React, { useState } from 'react'

const RegisterPage = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const register = async (event) => {
        event.preventDefault()

        try {
            const response = await fetch('http://localhost:8080/register', {
                method: 'POST',
                body: JSON.stringify({ username, password }),
                headers: { 'Content-Type': 'application/json' },
            })

            if (response.status === 201) {
                alert('register successful')
            } else {
                alert('register failed')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <form className='register' onSubmit={register}>
                <h1>Register</h1>
                <input
                    type='text'
                    placeholder='username'
                    value={username}
                    onChange={event => setUsername(event.target.value)}>
                </input>
                <input
                    type='password'
                    placeholder='password'
                    value={password}
                    onChange={event => setPassword(event.target.value)}>
                </input>
                <button>Register</button>
            </form>
        </div>
    )
}

export default RegisterPage