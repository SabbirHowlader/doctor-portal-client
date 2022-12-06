import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import bg from '../../../assets/images/appointment.png'
import Primarybutton from '../../../Components/Primarybutton/Primarybutton';

const MakeAppointment = () => {
    return (
        <section>
            <div className="hero my-20">
                <div className="hero-content flex-col lg:flex-row " style={{background: `url(${bg})`}}>
                    <img src={doctor} className="-mt-32 -mb-4 hidden lg:block w-1/2 rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h4 className='text-2xl font-bold text-cyan-600'>Appointment</h4>
                        <h1 className="text-5xl font-bold">Make an appointment Today</h1>
                        <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                       <Primarybutton>Appointment</Primarybutton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;