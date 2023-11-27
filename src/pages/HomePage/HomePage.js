import React from 'react'
import './HomePage.scss'
import Meals from './Meals/Meals'
import HotTrends from './HotTrends/HotTrends'
import BookTable from './BookTable/BookTable'
import Events from './Events/Events'
import Testimonials from './Testimonials/Testimonials'
import Galeries from './Galeries/Galeries'

export default function HomePage() {
  return (
    <div>
      <Meals />
      <HotTrends />
      <section className='testi-galleries'>
        <div className="bg"></div>
        <div className='container grid-2'>
          <Testimonials />
          <Galeries />
        </div>
      </section>
      <Events />
      <BookTable />
    </div>
  )
}
