import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css';

const UserDetail = (props) => {
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(3),
        margin: theme.spacing(3),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    }));

    const { title, id } = props.post;
    return (
        <Grid item xs={16}>
            <Item>
                <h3 className="post-title" >{title}</h3>
                <div>
                    <Link to={`posts/${id}`}><Button variant="outlined" color="error"> <KeyboardArrowRightIcon /> View Post</Button></Link>
                </div>
            </Item>
        </Grid>
    );
};

export default UserDetail;