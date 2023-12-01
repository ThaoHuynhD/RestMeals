import React from 'react'
import './AboutPage.scss'
import { chefInfo, chooseUsData } from '../../fakeData/AboutPageData'
import BookTable from '../../components/BookTable'
import { waitingUpdate } from '../../function/UpdateFunction/UpdateFunction'

export default function AboutPage() {
  return (
    <div>
      <section id='chooseUs'>
        <div className="container">
          <div className="title">
            <span className='headerSpan'>Choose US</span>
            <h1 className='headerTitle'>Why <span>Choose Us</span></h1>
          </div>
          <div className="chooseList">
            {chooseUsData.map((item, index) => {
              return <div key={index} className='choose_item'>
                <h3>{item.title} </h3>
                <p>{item.content}</p>
              </div>
            })}
          </div>
        </div>
      </section>
      <section id='chefInfo'>
        <div className="container">
          <div className="title">
            <span className='headerSpan'>Chef</span>
            <h1 className='headerTitle'>Our <span>Professional Chef</span></h1>
          </div>
          <div className="chefList">
            {chefInfo.map((chef, index) => {
              return <div className='chef_item' key={index}>
                <div className="picture-wrapper">
                  <img src={chef.urlImg} alt={chef.name} />
                </div>
                <div className='title'>
                  <div className=' bg-dark'>
                    <h3>{chef.name}</h3>
                    <span>{chef.jobTitile}</span>
                    <div className='socialBtn'>
                      <ul className='flex-center'>
                        <li><button className='orangeOutLineBtn'
                          onClick={() => { waitingUpdate() }}><i className="fa-brands fa-facebook-f"></i></button></li>
                        <li><button className='orangeOutLineBtn'
                          onClick={() => { waitingUpdate() }}><i className="fa-brands fa-instagram"></i></button></li>
                        <li><button className='orangeOutLineBtn'
                          onClick={() => { waitingUpdate() }}><i className="fa-brands fa-twitter"></i></button></li>
                      </ul>
                    </div>
                  </div></div>
              </div>
            })}
          </div>
        </div>
      </section>
      <BookTable />
    </div>
  )
}
