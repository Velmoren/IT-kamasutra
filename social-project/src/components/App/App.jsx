import React from 'react';
import { Route } from 'react-router-dom';

// components
import HeaderContainer from '../Header/HeaderContainer';
import Navbar from '../Navbar/Navbar';
import ProfileContainer from '../Profile/ProfileContainer';
import DialogsContainer from '../Dialogs/DialogsContainer';
import News from '../News/News';
import UsersCntainer from '../Users/UsersContainer';
import Music from '../Music/Music';
import SettingsPage from '../SettingsPage/SettingsPage';

// styles
import classes from './App.module.css';
const { appWrapper, content, wrapper } = classes;

const App = () => {

    return (
        <div className={appWrapper}>
            <HeaderContainer />
            <Navbar />
            <div className={content}>
                <div className={wrapper}>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
                    <Route path='/dialogs' render={() => <DialogsContainer />} />
                    <Route path='/users' render={() => <UsersCntainer />} />
                    <Route path='/news' component={News} />
                    <Route path='/music' component={Music} />
                    <Route path='/settings' component={SettingsPage} />
                </div>
            </div>
        </div>
    )
}

export default App;