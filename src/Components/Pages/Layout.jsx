import React from 'react'
import Header from '../Header/Header.jsx'
import {Home} from './Home/Home.jsx'
import {Chats} from './Chats/Chats.jsx'
import {Profile} from './Profile/Profile.jsx'

export const PageHome = () => {
    return(
        <>
            <Header/>
            <Home/>
        </>
    );
};

export const PageChats = () => {
    return(
        <>
            <Header/>
            <Chats/>
        </>
    );
};

export const PageProfile = () => {
    return(
        <>
            <Header/>
            <Profile/>
        </>
    );
};
