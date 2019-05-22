import React from 'react';

const User = ({user}) =>
    <div className='single-user' key={user.id}>
        <h4>{user.name}</h4>
        <p>id: {user.id}</p>
        <p>Email: {user.email}</p>
        <p>Password: {user.password}</p>
    </div>

export default User;