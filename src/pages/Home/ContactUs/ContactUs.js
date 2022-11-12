import React from 'react';
import appointment from '../../../assets/images/appointment.png';

const ContactUs = () => {
    return (
        <div className='mt-14 text-center' style={{ background: `url(${appointment})` }}>
            <div className='p-11'>
                <h4 className='text-xl text-primary font-bold'>Contact Us</h4>
                <h2 className='text-4xl text-white'>Stay connected with us</h2>
                <form className='mt-8 flex flex-col items-center'>
                    <input type="text" placeholder="Email address" className="input input-bordered w-full input-md max-w-xs mb-5" />
                    <input type="text" placeholder="Subject" className="input input-bordered w-full input-md max-w-xs mb-5" />
                    <textarea className="textarea textarea-bordered w-80 mb-5" placeholder="Your message"></textarea>
                    <input type="submit" className='btn btn-primary w-28 text-white' value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default ContactUs;