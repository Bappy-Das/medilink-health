import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Specialist from '../Specialist/Specialist';
import WellCome from '../WellCome/WellCome';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <WellCome></WellCome>
            <Services></Services>
            <Specialist></Specialist>
        </div>
    );
};

export default Home;