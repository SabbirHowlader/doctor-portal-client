import React from 'react';
import chair from '../../../assets/images/chair.png'
import bg from '../../../assets/images/bg.png'
import Primarybutton from '../../../Components/Primarybutton/Primarybutton';

const Banner = () => {
    return (
        <div className="hero my-10" style={{background: `url(${bg})`}}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img  src={chair} className="lg:w-1/2 rounded-lg shadow-2xl"  alt=''/>
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                   <Primarybutton>Get Started</Primarybutton>
                </div>
            </div>
        </div>
    );
};

export default Banner;