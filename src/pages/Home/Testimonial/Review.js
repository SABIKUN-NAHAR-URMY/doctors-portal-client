import React from 'react';

const Review = ({ review }) => {
    const { name, review: userReview, img, location } = review;
    return (
        <div className="card shadow-xl p-5">
            <div className="card-body">
                <p className='mb-5'>{userReview}</p>
                <div className="card-actions flex items-center">
                    <div className="avatar">
                        <div className="w-16 mr-3 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h5>{name}</h5>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;