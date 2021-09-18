const Profile = () => {
    let time = new Date().toLocaleString();
    fetch(`https://api.ipify.org/?format=jsonp?callback=?`, {
        method: 'GET',
        headers: {},
    })
        .then(res => {
            return res.text()
        }).then(ip => {
            console.log('ip', ip);
        });

    return (
        <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignContent: 'space-around', marginTop: '150px', boxShadow: '0 0 10px solid gray', padding: '5px', borderRadius: '5px' }}>
            <h1>Hello Admin</h1>
            <p>Last Logged In : {time}  </p>
        </div>
    );
};

export default Profile;