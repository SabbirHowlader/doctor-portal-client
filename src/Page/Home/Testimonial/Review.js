import React from 'react';

const Review = ({ testimonial }) => {
    const { img, name, review, location } = testimonial;
    return (
        <div className="card shadow-xl">
            <div className="card-body">
                <p>{review}</p>
                <div className='flex justify-start'>
                    <figure><img src={img} alt="Shoes" className='w-20 rounded-full' /></figure>
                    <div className='ml-5'>
                        <h4>{name}</h4>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;