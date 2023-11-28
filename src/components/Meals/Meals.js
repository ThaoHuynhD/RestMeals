import React, { useState } from 'react'
import './Meals.scss'
import { mealsData } from '../../fakeData/MealsData';

export default function Meals() {
    let [selectedFoodType, setSelectedFoodType] = useState('Breakfast');
    let foodListByType = mealsData.find(foodList => foodList.key === selectedFoodType) || [];
    return (
        <section id='Meals'>
            <div className="container">
                <div className="content">
                    <div className='menu'>
                        <span className='headerSpan'>Select Your Meals</span>
                        <h1 className='headerTitle'>Popular <span>Foods</span></h1>
                        <div className='selection'>
                            {mealsData.map(type => {
                                return (
                                    <li key={type.key}>
                                        <button className={`whiteBtn flex-center ${selectedFoodType === type.key ? 'active' : ''}`}
                                            onClick={() => { setSelectedFoodType(type.key) }}>
                                            <img src={type.icon} alt="" />
                                            {type.title}</button></li>
                                )
                            })}
                        </div>
                    </div>
                    <div className='detail'>
                        <div className='title'>
                            <h1>{foodListByType.title}</h1>
                            <span>{`4/${foodListByType.listFood.length} items`}</span>
                        </div>
                        <div className="foodList">

                            {foodListByType.listFood.map(food => {
                                return <div className='foodItem' key={food.key}>
                                    <div className='picture-wrapper flex-center'><img src={food.urlImg} alt={food.key} /></div>
                                    <div className="food-content">
                                        <h3>{food.name}</h3>
                                        <p>{food.desc.substring(0, 140)}{food.desc.length > 140 ? '...' : ''}</p>
                                        <span className='price'>{food.price.toLocaleString()} VND</span>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
