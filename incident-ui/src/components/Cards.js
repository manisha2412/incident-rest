import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Incident Data</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Despite COVID-19 lockdown, over 5,400 kids went missing in MP in first 7 months of 2020'
              label='Missing Child'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='5 Killed As Truck Overturns In Maharashtra Mumbai-Pune Highway'
              label='ROAD ACCIDENT'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Uttarakhand Two brothers shot dead over land dispute in Udham Singh Nagar'
              label='LAND DISPUTE'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Mumbai: Dance teacher arrested for stealing from senior citizens'
              label='SENIOR CITIZENS'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='women worldwide have been subjected to either physical and/or sexual intimate partner violence or non-partner sexual violence in their lifetime.'
              label='Violence against women'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
