import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const MyAppointment = () => {
    const { user } = useContext(AuthContext);

    const url = `https://dental-portal-server-sabbirhowlader.vercel.app/bookings?email=${user?.email}`

    const { data: booking = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers:{
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h3 className='text-3xl mb-4'>My Appointment</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                
                            booking?.map((booking, i) =>
                                <tr key={booking._id}>
                                    <th>{i+1}</th>
                                    <td>{booking.patient}</td>
                                    <td>{booking.treatment}</td>
                                    <td>{booking.appointmentDate}</td>
                                    <td>{booking.slot}</td>
                                    <td><Link to={`/dashboard/payment/${booking._id}`}><button className='btn btn-primary btn-sm'>pay</button></Link></td>
                                    {/* <td>{
                                        booking.price && !booking.paid && <button className='btn btn-primary'>pay</button>
                                    }
                                    {
                                        booking.price && booking.paid && <span className='text-primary
                                        '>Paid</span>
                                    }
                                    </td> */}
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyAppointment;