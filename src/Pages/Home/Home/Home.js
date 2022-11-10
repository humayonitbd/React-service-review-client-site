import React from 'react';
import useTitle from '../../../hooks/useTitle';
import DentistService from '../DentistService/DentistService';
import HomeBanar from '../HomeBanar/HomeBanar';
import OthersSec from '../OthersSec/OthersSec';
import Services from '../Services/Services';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <HomeBanar></HomeBanar>
            <Services></Services>
            <DentistService></DentistService>
            <OthersSec></OthersSec>
        </div>
    );
};

export default Home;