import React from 'react'
import Meals from '../../components/Meals/Meals'
import HotTrends from '../../components/HotTrends/HotTrends'
import Galleries from '../../components/Galleries/Galleries'
import Events from '../../components/Events/Events'
import BookTable from '../../components/BookTable'

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
