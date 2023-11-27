import React from 'react'
import './HomePage.scss'
import Meals from './Meals'
import HotTrends from './HotTrends'
import BookTable from './BookTable'
import Events from './Events'
import Galleries from './Galleries'

export default function HomePage() {
  return (
    <div>
      <Meals />
      <HotTrends />
      <Galleries />
      <Events />
      <BookTable />
    </div>
  )
}
