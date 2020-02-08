import React from 'react';
import { Route } from 'react-router-dom';

// components
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Profile from '../Profile/Profile';
import DialogsContainer from '../Dialogs/DialogsContainer';
import News from '../News/News';
import UsersCntainer from '../Users/UsersContainer';
import Music from '../Music/Music';
import Settings from '../Settings/Settings';

// styles
import classes from './App.module.css';
const { appWrapper, content, wrapper } = classes;

const App = () => {

    return (
        <div className={appWrapper}>
            <Header />
            <Navbar />
            <div className={content}>
                <div className={wrapper}>
                    <Route path='/profile' render={() => <Profile />} />
                    <Route path='/dialogs' render={() => <DialogsContainer />} />
                    <Route path='/users' render={() => <UsersCntainer />} />
                    <Route path='/news' component={News} />
                    <Route path='/music' component={Music} />
                    <Route path='/settings' component={Settings} />
                </div>
            </div>
        </div>
    )
}

export default App;