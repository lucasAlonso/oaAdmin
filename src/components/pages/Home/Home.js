import React from 'react';
import './Home.css';
import NavigationBar from '../../commons/NavigationBar';

const SocialMedia = ({ icon }) => {
    return (
        <div>
            <img src={icon} />
        </div>
    );
};

const Home = () => {
    return (
        <>
            <div className='HomeContainer'>
                <div className='HomeContent'></div>
            </div>
        </>
    );
};

export default Home;
