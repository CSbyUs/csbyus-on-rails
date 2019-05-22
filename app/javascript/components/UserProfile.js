import React from 'react';
import Button from '@material-ui/core/Button';

const User = ({user, onRemoveUser=f=>f}) =>
    <div className='single-user' key={user.id}>
        <h4>{user.name}</h4>
        <p>id: {user.id}</p>
        <p>Email: {user.email}</p>
        <p>Password: {user.password}</p>

        <Button
            onClick={() => onRemoveUser(user.id)}
            color='primary'>
                Delete User
        </Button>
    </div>

export default User;