import React, { useState } from 'react';
import AppointBanner from '../AppointBanner/AppointBanner';
import AvailableAppointment from '../AvailableAppoint/AvailableAppointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <AppointBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AppointBanner>
            <AvailableAppointment
                selectedDate={selectedDate}
            ></AvailableAppointment>
        </div>
    );
};

export default Appointment;