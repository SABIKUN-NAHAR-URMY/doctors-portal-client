import React from 'react';

const Options = ({ option, setTreatment }) => {
    const { name, slots } = option;
    return (
        < div className="card shadow-xl" >
            <div className="card-body text-center">
                <h2 className="text-2xl text-secondary font-bold text-center">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try another day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
                <div className="card-actions justify-center">
                    <label
                    disabled = {slots.length === 0 }
                    onClick={()=>setTreatment(option)}
                     htmlFor="my-modal-3" className="btn btn-primary text-white">Book Appointment</label>
                </div>
            </div>
        </div >
    );
};

export default Options;