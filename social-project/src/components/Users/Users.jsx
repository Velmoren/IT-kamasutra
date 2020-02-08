import React from 'react';

// styles
import S from './Users.module.css';
const { userPhoto } = S;

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://n1s2.hsmedia.ru/92/05/f7/9205f7cef626f6efe1fa0fee796c6b7b/300x300_21_78ed54cc5b2ffa60488538e5fa590a5d@620x620_0xc0a839a2_11093679921476783541.jpeg',
                followed: true,
                fullName: 'Dmitriy',
                status: 'I am a boss',
                location: { city: 'Minsk', country: 'Belarus' }
            },
            {
                id: 2,
                photoUrl: 'https://n1s2.hsmedia.ru/92/05/f7/9205f7cef626f6efe1fa0fee796c6b7b/300x300_21_78ed54cc5b2ffa60488538e5fa590a5d@620x620_0xc0a839a2_11093679921476783541.jpeg',
                followed: false,
                fullName: 'Sasha',
                status: 'I am a boss too',
                location: { city: 'Moskow', country: 'Russia' }
            },
            {
                id: 3,
                photoUrl: 'https://n1s2.hsmedia.ru/92/05/f7/9205f7cef626f6efe1fa0fee796c6b7b/300x300_21_78ed54cc5b2ffa60488538e5fa590a5d@620x620_0xc0a839a2_11093679921476783541.jpeg',
                followed: false,
                fullName: 'Andrew',
                status: 'I am a boss too',
                location: { city: 'Kiev', country: 'Ukraine' }
            }
        ])
    }
    return (
        <div>
            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <img className={userPhoto} src={user.photoUrl} alt={user.fullName} />
                        </div>
                        <div>
                            {user.followed ?
                                <button onClick={() => { props.unfollow(user.id) }}>Unfollow</button> :
                                <button onClick={() => { props.follow(user.id) }}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.fullName}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{user.location.country}</div>
                            <div>{user.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;