import React from 'react';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import quta from '../../../assets/icons/quote.svg'
import Review from './Review';

const Testimonials = () => {

   const testimonialData = [
        {
            _id: 1,
            name:' winson Herry',
            img: people1,
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'califonia'
        },
        {
            _id: 2,
            name:' winson Herry',
            img: people2,
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'califonia'
        },
        {
            _id: 3,
            name:' winson Herry',
            img: people3,
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'califonia'
        },
    ]

    return (
        <section className='my-20 mx-2'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-primary font-bold'>Testimonial</h4>
                    <h2 className='text-4xl'>What our PAtients says</h2>
                </div>
                <figure>
                    <img className='w-16 hidden lg:block lg:w-48' src={quta} alt="" />
                </figure>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                   testimonialData.map(testimonial => <Review
                    key={testimonial._id}
                    testimonial={testimonial}
                   ></Review>) 
                }
            </div>
        </section>
    );
};

export default Testimonials;