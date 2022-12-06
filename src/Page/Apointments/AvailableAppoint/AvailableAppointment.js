import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, {useState } from 'react';
import Loading from '../../../Shared/Loading/Loading';
import AppointmentOption from '../AppointmentOPtion/AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppointment = ({ selectedDate }) => {

    // const [AppointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');
    const {data: AppointmentOptions = [], refetch, isLoading} = useQuery({
        queryKey: ['service', date],
        queryFn: async () => {
           const res = await fetch(`https://dental-portal-server-sabbirhowlader.vercel.app/service?date=${date}`);
           const data = await res.json();
           return data
        }
    })
     

    if(isLoading){
         return <Loading></Loading>
    }
    // useEffect(() => {
    //     fetch('https://dental-portal-server-sabbirhowlader.vercel.app/service')
    //         .then(res => res.json())
    //         .then(data => setAppointmentOptions(data))
    // }, [])

    return (
        <section className='mt-16'>
            <p className='text-center text-secondary font-bold'>You have selected date: {format(selectedDate, 'PP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
                {
                    AppointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        AppointmentOption={option}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                    refetch = {refetch}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointment;