import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

// components
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Profile from '../Profile/Profile';
import Dialogs from '../Dialogs/Dialogs';
import News from '../News/News';
import Music from '../Music/Music';
import Settings from '../Settings/Settings';

// styles
import classes from './App.module.css';
const { appWrapper, content, wrapper } = classes;

const App = (props) => {

    return (
        <BrowserRouter>
            <div className={appWrapper}>
                <Header />
                <Navbar />
                <div className={content}>
                    <div className={wrapper}>
                        <Route path='/profile' render={() =>
                            <Profile state={props.state}
                                actionAddPost={props.actionAddPost}
                                updateNewPostText={props.updateNewPostText}
                            />}
                        />
                        <Route path='/dialogs' render={() => <Dialogs state={props.state} />} />
                        <Route path='/news' component={News} />
                        <Route path='/music' component={Music} />
                        <Route path='/settings' component={Settings} />
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;