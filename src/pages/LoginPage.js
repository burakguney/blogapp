import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

const LoginPage = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)

    const login = async (event) => {
        event.preventDefault()

        try {
            const response = await fetch('http://localhost:8080/login', {
                method: 'POST',
                body: JSON.stringify({ username, password }),
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
            })

            if (response.status === 200) {
                setRedirect(true)
            } else {
                alert("Login failed.")
            }
        } catch (error) {
            console.log(error)
        }
    }

    if (redirect) {
        return <Navigate to={'/'} />
    }

    return (
        <div>
            <form className='login' onSubmit={login}>
                <h1>Login</h1>
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
                <button>Login</button>
            </form>
        </div>
    )
}

export default LoginPage