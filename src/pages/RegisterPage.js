import React from 'react'

const RegisterPage = () => {
    return (
        <div>
            <form action='' className='register'>
                <h1>Register</h1>
                <input type='text' placeholder='username'></input>
                <input type='password' placeholder='password'></input>
                <button>Register</button>
            </form>
        </div>
    )
}

export default RegisterPage