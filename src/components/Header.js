import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'

const Header = () => {

    const { userInfo, setUserInfo } = useContext(UserContext)

    useEffect(() => {
        fetch('http://localhost:8080/profile', {
            credentials: 'include'
        }).then(response => {
            response.json().then(userInfo => {
                setUserInfo(userInfo)
            })
        })
    }, [setUserInfo])

    const logout = () => {
        fetch('http://localhost:8080/logout', {
            credentials: 'include',
            method: 'POST'
        })
        setUserInfo('')
    }

    const username = userInfo?.username

    return (
        <header>
            <Link to='/' className='logo'>MyBlog</Link>
            <nav>
                {
                    username && (
                        <>
                            <Link to='/create'>Create new post</Link>
                            <Link onClick={logout}>Logout</Link>
                        </>
                    )
                }
                {
                    !username && (
                        <>
                            <Link to='/login'>Login</Link>
                            <Link to='/register'>Register</Link>
                        </>
                    )
                }
            </nav>
        </header>
    )
}

export default Header