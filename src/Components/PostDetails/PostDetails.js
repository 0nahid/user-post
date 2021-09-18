import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, Avatar, Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './PostDetails.css'

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
    // image details
    const [image, setImage] = useState([]);
    useEffect(() => {
        axios(`https://mocki.io/v1/cf1323a4-200f-4a95-a4c8-947b8b49daa4`)
            .then(data => setImage(data.data));
    }, [])
    return (
        <Container>
            <Grid item xs={16}>
                <Item>
                    <h3 className="post-title">{post.title}</h3>
                    <p>{post.body}</p>
                    <Link to={`/home`}><Button variant="outlined" color="secondary"> <ArrowBackIcon /> Back To Home </Button></Link>
                </Item>
            </Grid>
            <h3>Comments on this post</h3>
            {comment.map(comment =>
                <div>
                    <Grid item xs={16}>
                        <Item className="comment-detail">
                            <div>
                                <Avatar sx={{ width: 56, height: 56 }} alt={comment.name} src={picUrl} />
                            </div>
                            <div className="comment">
                                <p className="post-title">{comment.name}</p>
                                <p className="post-title"><small>{comment.body}</small></p>
                            </div>
                        </Item>
                    </Grid>
                </div>
            )}
        </Container>
    );
};

export default PostDetails;