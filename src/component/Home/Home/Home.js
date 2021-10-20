import React from 'react';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';
import WellCome from '../WellCome/WellCome';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <WellCome></WellCome>
            <Services></Services>
            {/* <Specialist></Specialist> */}
            <Doctors></Doctors>
        </div>
    );
};

export default Home;