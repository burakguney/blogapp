import React from 'react'
import { Link } from 'react-router-dom'

const Post = () => {
    return (
        <div className='post'>
            <div className='image'>
                <img src="https://picsum.photos/id/0/500/333" alt="" />
            </div>
            <div className='texts'>
                <h2>Laptop</h2>
                <p className='info'>
                    <Link href='' className='author'>Burak Güney</Link>
                    <time>2023-05-11 17:30</time>
                </p>
                <p className='summary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    )
}

export default Post