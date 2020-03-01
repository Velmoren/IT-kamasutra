import React from 'react';

// Files
import userAvatar from '../../assets/images/user.png'

// styles
import S from './Users.module.css';
const { userPhoto, selectedPage } = S;

const Users = (props) => {
  // затычка 
  let maxPageCount = props.totalUsersCount;
  if (maxPageCount > 100) maxPageCount = 100
  let pagesCount = Math.ceil(maxPageCount / props.pageSize);

  // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  return (
    <div>
      <div>
        {pages.map((p, i) => {
          return (
            <span
              onClick={() => props.onPageChanged(p)}
              key={i}
              className={props.currentPage === p ? selectedPage : null}
            >{p}</span>
          )
        })}
      </div>
      {props.users.map(user =>
        <div key={user.id}>
          <span>
            <div>
              <img className={userPhoto} src={user.photos.small != null ? user.photos.small : userAvatar} alt={user.name} />
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
              <div>{user.name}</div>
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

export default Users;