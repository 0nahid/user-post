import Fingerprint from '@mui/icons-material/Fingerprint';
import { Button, ButtonGroup, IconButton } from '@mui/material';
import React from 'react';
const Header = () => {
    return (
            <ButtonGroup variant="outlined" aria-label="outlined primary button group" color="error">
                <Button>One <IconButton aria-label="fingerprint" color="success"><Fingerprint /></IconButton> </Button>
                <Button>Two <IconButton aria-label="fingerprint" color="primary"><Fingerprint /></IconButton></Button>
            </ButtonGroup>
    );
};

export default Header;