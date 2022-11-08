import React from 'react';
import useTitle from '../../../hooks/useTitle';
import CarService from '../CarService/CarService';
import HomeBanar from '../HomeBanar/HomeBanar';
import OthersSec from '../OthersSec/OthersSec';
import Services from '../Services/Services';

const Home = () => {
    // useTitle('Home');
    return (
        <div>
            <HomeBanar></HomeBanar>
            <Services></Services>
            <CarService></CarService>
            <OthersSec></OthersSec>
        </div>
    );
};

export default Home;