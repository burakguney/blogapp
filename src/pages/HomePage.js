import { useEffect, useState } from 'react'
import Post from '../components/Post'

const HomePage = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/post')
            .then(response => {
                response.json()
                    .then(posts => {
                        setPosts(posts);
                    });
            });
    }, []);
    return (
        <div>
            {posts.length > 0 && posts.map(post => (
                <Post {...post} />
            ))}
        </div>
    );
}

export default HomePage