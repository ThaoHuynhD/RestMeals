import React from 'react'
import './HotTrends.scss'
import { hotTrendsData } from '../../FakeData/HotTrendsData'
export default function HotTrends() {
    return (
        <section id='hotTrends'>
            <div className='bg'></div>
            <div className="container">
                <div className="title">
                    <span className='headerSpan'>Choose Your Favorites</span>
                    <h1 className='headerTitle'>Popular <span>Foods</span></h1>
                </div>
                <div className='foodList'>
                    {hotTrendsData.map(food => {
                        return <div key={food.key} className='food'>
                            <div className='picture-wrapper flex-center'><img src={food.urlImg} alt={food.key} /></div>
                            <div className='content'>
                                <h3>{food.name}</h3>
                                <p className='price'>{food.price.toLocaleString()} VND</p>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </section>
    )
}
