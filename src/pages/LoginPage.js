import React from 'react'

const LoginPage = () => {
    return (
        <div>
            <form action='' className='login'>
                <h1>Login</h1>
                <input type='text' placeholder='username'></input>
                <input type='password' placeholder='password'></input>
                <button>Login</button>
            </form>
        </div>
    )
}

export default LoginPage