import React from 'react';
import CommingSone from '../CommingSone/CommingSone';
import Contactform from '../ContactForms/Contactform';
import Homebener from '../Homebenner/Homebener';
import Profation from '../Profational/Profation';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Homemain = () => {
    return (
        <>
           <Homebener></Homebener> 
           <Services></Services>
           <Profation></Profation>
           <Testimonials></Testimonials>
           <CommingSone></CommingSone>
           <Contactform></Contactform>
        </>
    );
};

export default Homemain;