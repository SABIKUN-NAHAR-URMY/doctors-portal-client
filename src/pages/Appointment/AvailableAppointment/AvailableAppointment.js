import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import Options from '../Options/Options';

const AvailableAppointment = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])

    return (
        <section className='my-16'>
            <p className='text-center text-2xl text-secondary'>Available Appointments on {format(selectedDate, 'PP')}</p>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 '>
                {
                    appointmentOptions.map(option => <Options
                        key={option._id}
                        option={option}
                        setTreatment={setTreatment}></Options>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}>
                </BookingModal>
            }
        </section>
    );
};

export default AvailableAppointment;