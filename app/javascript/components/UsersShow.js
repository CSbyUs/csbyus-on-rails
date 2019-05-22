import React, { Component } from 'react';
import axios from 'axios';
import UserProfile from './UserProfile';

class UsersShow extends Component {
    constructor(props){
        super(props)
        this.state = {
            users: []
        }

        this.removeUser = this.removeUser.bind(this);
    }

    removeUser(id) {
        axios.delete('api/v1/users/' + id)
            .then(response => {
                const users = this.state.users.filter(
                    user => user.id !== id
                )
                this.setState({users})
            })
            .catch(error => console.log(error))
    }

    componentDidMount() {
        axios.get('api/v1/users.json')
            .then(response => {
                console.log(response)
                this.setState({
                    users: response.data
                })
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div className="users-show">
                {this.state.users.map( user => {
                    return (<UserProfile user={user} key={user.id} onRemoveUser={this.removeUser}/>)
                })}
            </div>
        )
    }
}
export default UsersShow;