import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import HeaderContainer from './Components/Header/HeaderContainer';
import Navbar from './Components/Navbar/Navbar';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import UsersContainer from './Components/Users/UsersContainer';
import Login from './Components/Login/Login';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/dialogs' render={() => <DialogsContainer />} />

        <Route path='/profile/:userId?' render={() => <ProfileContainer />} />

        <Route path='/users' render={() => <UsersContainer />} />

        <Route path='/login' render={() => <Login />} />
      </div>
    </div>
  );
}

export default App;
