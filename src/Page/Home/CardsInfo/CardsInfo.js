import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import CardDetails from './CardDetails';

const CardsInfo = () => {

    const cardData = [
        {
            id: 1,
            name: 'Opening House',
            description: 'Opening 9.00 am to colosing 5.00pm',
            icon: clock,
            bgClass: 'bg-gradient-to-r from-primary to-secondary '
        },
        {
            id: 2,
            name: 'Opening House',
            description: 'Opening 9.00 am to colosing 5.00pm',
            icon: marker,
            bgClass: 'bg-secondary'
        },
        {
            id: 3,
            name: 'Opening House',
            description: 'Opening 9.00 am to colosing 5.00pm',
            icon: phone,
            bgClass: 'bg-accent'
        }
    ]
    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-20'>
            {
                cardData.map(card => <CardDetails
                    key={card.id}
                    card={card}
                ></CardDetails>)
            }
        </div>
    );
};

export default CardsInfo;