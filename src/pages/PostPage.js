import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PostPage = () => {
    const [postInfo, setPostInfo] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:8080/post/${id}`).then(response => {
            response.json().then(postInfo => {
                setPostInfo(postInfo)
            })
        })
    }, [])

    if (!postInfo) return ''

    return (
        <div>
            <div className='post-page'>
                <div className='image'>
                    <img src={`http://localhost:8080/${postInfo.cover}`} alt="" />
                </div>
                <h1>{postInfo.title}</h1>
                <div></div>
            </div>
        </div>
    )
}

export default PostPage