import React from 'react';
import * as axios from 'axios';

// Files
import userAvatar from '../../assets/images/user.png'

// styles
import S from './Users.module.css';
const { userPhoto } = S;

class Users extends React.Component {

    constructor(props) {
        super(props);

        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(respons => { this.props.setUsers(respons.data.items) });
    }

    render() {
        console.log(this.props.users);

        return (
            <div>
                {this.props.users.map(user =>
                    <div key={user.id}>
                        <span>
                            <div>
                                <img className={userPhoto} src={user.photos.small != null ? user.photos.small : userAvatar} alt={user.name} />
                            </div>
                            <div>
                                {user.followed ?
                                    <button onClick={() => { this.props.unfollow(user.id) }}>Unfollow</button> :
                                    <button onClick={() => { this.props.follow(user.id) }}>Follow</button>
                                }
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{user.fullName}</div>
                                <div>{user.status}</div>
                            </span>
                            <span>
                                <div>{"user.location.country"}</div>
                                <div>{"user.location.city"}</div>
                            </span>
                        </span>
                    </div>)
                }
            </div>
        )
    }
}

export default Users;