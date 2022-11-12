import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open from 9.00 am to 5.00pm everyday ',
            icon: clock,
            bgColor: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: 'Visit our location',
            description: 'Brooklyn, NY 10036, United States ',
            icon: marker,
            bgColor: 'bg-accent'
        },
        {
            id: 3,
            name: 'Contact us now',
            description: '+000 123 456789 ',
            icon: phone,
            bgColor: 'bg-gradient-to-r from-primary to-secondary'
        },
    ]
    return (
        <div className='grid mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                cardData.map(card => <InfoCard
                key={card.id}
                card={card}></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;