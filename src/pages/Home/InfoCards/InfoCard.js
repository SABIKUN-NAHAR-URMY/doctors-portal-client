import React from 'react';

const InfoCard = ({card}) => {
    const {name, description, icon, bgColor} = card;
    return (
        <div className={`card md:card-side text-white p-6 shadow-xl ${bgColor}`}>
            <figure><img src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;