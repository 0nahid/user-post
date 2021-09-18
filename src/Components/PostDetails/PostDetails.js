import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button , Avatar } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const PostDetails = () => {

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(3),
        margin: theme.spacing(3),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    }));

    const { postId } = useParams();
    // post details
    const [post, setPost] = useState({})
    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(data => setPost(data.data));
    }, [postId])
    // comment details
    const [comment, setComment] = useState([])
    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then(data => setComment(data.data));
    }, [postId])
    const picID = Math.floor(Math.random() * 100) + 1;
    const picUrl = `https://randomuser.me/api/portraits/men/${picID}.jpg`
    return (
        <div>
            <Grid item xs={16}>
                <Item>
                    <h3 className="post-title">{post.title}</h3>
                    <p>{post.body}</p>
                    <Link to={`/home`}><Button variant="outlined" color="secondary"> <ArrowBackIcon /> Back To Home </Button></Link>
                </Item>
            </Grid>
            <h4>Comments on this post</h4>
            {comment.map(comment =>
                <div>
                    <Grid item xs={16}>
                        <Item>
                            <Avatar  sx={{ width: 56, height: 56 }} alt={comment.name} src={picUrl} />
                            <p className="post-title">{comment.name}</p>
                            <p className="post-title"><small>{comment.body}</small></p>
                        </Item>
                    </Grid>
                </div>
            )}

        </div>
    );
};

export default PostDetails;