import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import CardsInfo from '../CardsInfo/CardsInfo';
import ContactUs from '../ContactUs/ContactUs';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonials from '../Testimonial/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CardsInfo></CardsInfo>
            <Services></Services>
            <AboutUs></AboutUs>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <ContactUs></ContactUs>
            
        </div>
    );
};

export default Home;