import React from 'react';
import Preloader from '../../common/Preloader/Preloader'

// Files
import standartAva from '../../../assets/images/user.png'

// styles
import classes from './ProfileInfo.module.css';
const { descriptionBlock, profile__ava, profile__content, contactsBlock, profile__description } = classes;

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    const lookingForAJobText = props.profile.lookingForAJob ? props.profile.lookingForAJobDescription : 'В настоящее время я трудоустроен'

    return (
        <div className={descriptionBlock}>
            <div className={profile__ava}>
                <img src={props.profile.photos.large ? props.profile.photos.large : standartAva} alt='some' />
            </div>
            <div className={profile__content}>
                <h2>{props.profile.fullName}</h2>
                <p>{props.profile.aboutMe}</p>
                <div className={profile__description}>
                    <div>
                        <span>{lookingForAJobText}</span>
                    </div>
                    <div className={contactsBlock}>
                        {props.profile.contacts.facebook ? <a href={props.profile.contacts.facebook}>facebook</a> : null}
                        {props.profile.contacts.website ? <a href={props.profile.contacts.website}>website</a> : null}
                        {props.profile.contacts.vk ? <a href={props.profile.contacts.vk}>vk</a> : null}
                        {props.profile.contacts.twitter ? <a href={props.profile.contacts.twitter}>twitter</a> : null}
                        {props.profile.contacts.instagram ? <a href={props.profile.contacts.instagram}>instagram</a> : null}
                        {props.profile.contacts.youtube ? <a href={props.profile.contacts.youtube}>youtube</a> : null}
                        {props.profile.contacts.mainLink ? <a href={props.profile.contacts.mainLink}>mainLink</a> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;