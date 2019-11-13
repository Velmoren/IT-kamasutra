import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

// components
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

// styles
import classes from './App.module.css';
const { appWrapper, content, wrapper } = classes;

const App = () => {
    return (
        <BrowserRouter>
            <div className={appWrapper}>
                <Header />
                <Navbar />
                <div className={content}>
                    <div className={wrapper}>
                        <Route path='/profile' component={Profile} />
                        <Route exact path='/messages' component={Messages} />
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