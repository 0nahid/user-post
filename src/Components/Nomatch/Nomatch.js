import React from 'react';

const Nomatch = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignContent: 'space-around', marginTop: '150px' }}>
            <h1>404. <span style={{ color: 'gray', fontSize: '16px' }}> That’s an error.</span> </h1>
            <p>
                The requested URL /error was not found on this server.
                <p style={{ color: 'gray' }}>That’s all we know.</p>
            </p>
        </div>
    );
};

export default Nomatch;