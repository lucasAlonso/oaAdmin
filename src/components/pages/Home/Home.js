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
    let ac = localStorage.getItem('account');
    let account = JSON.parse(ac);

    return (
        <>
            <div className='HomeContainer'>
                <div className='HomeContent'></div>
            </div>
        </>
    );
};

export default Home;
