import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const PostDetails = () => {

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(3),
        margin: theme.spacing(3),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    }));

    const { postId } = useParams();
    const [post, setPost] = useState({})
    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(data => setPost(data.data));
    }, [postId])

    return (
        <Grid item xs={16}>
            <Item>
                <h3 className="post-title">{post.title}</h3>
                <p>{post.body}</p>
            </Item>
        </Grid>
    );
};

export default PostDetails;