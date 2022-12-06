import React from 'react';
import bg from '../../../assets/images/appointment.png'

const ContactUs = () => {
    return (
        <div className="hero my-10" style={{background: `url(${bg})`}}>
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl text-center text text-green-500 font-bold">Contact us</h1>
                    <p className='text-3xl text-white'>Stay connected with us</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="subject" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <textarea type="text" className="textarea input input-bordered" placeholder="Your Message" ></textarea>
                        </div >
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;