import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Members from '../Team/Members/Members';


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Services></Services>
          <Members></Members>
          <About></About>
        </div>
    );
};

export default Home;