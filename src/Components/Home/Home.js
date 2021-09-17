import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import { Grid, Box } from '@mui/material';

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/posts')
            .then(data => setPosts(data.data))
    }, [])
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} columns={16}>
                    {
                        posts.map(post => <Post post={post} key={post.id}></Post>)
                    }
                </Grid>
            </Box>
        </div>
    );
};

export default Home;