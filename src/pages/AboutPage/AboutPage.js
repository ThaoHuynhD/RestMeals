import React from 'react'
import './AboutPage.scss'
import { waitingUpdate } from '../../components/UpdateFunction/UpdateFunction'
export default function AboutPage() {
  let chefInfo = [
    {
      urlImg: 'https://i.pinimg.com/564x/38/c9/be/38c9bed8afd866d6795f5164e7e7a9f8.jpg',
      name: 'Johnathan Evan',
      jobTitile: 'Master Chef',
    },
    {
      urlImg: 'https://i.pinimg.com/564x/98/43/d3/9843d3f294e9b67a7b48d8047cdbc280.jpg',
      name: 'Violet Graham',
      jobTitile: 'Chef',
    },
    {
      urlImg: 'https://i.pinimg.com/564x/d2/35/47/d2354797cfb995122e8bf0248cb1fd76.jpg',
      name: 'Tommy Carolline',
      jobTitile: 'Baker',
    },
  ]
  return (
    <div>
      <section id='chooseUs'>
        <div className="container">
          <div className="title">
            <span className='headerSpan'>Choose US</span>
            <h1 className='headerTitle'>Why <span>Choose Us</span></h1>
          </div>
          <div className="chooseList">
            <div className='choose_item'>
              <h3>Diverse Culinary Expertise: </h3>
              <p>Our chefs bring a wealth of experience and creativity to the kitchen, crafting a menu that spans international cuisines with a focus on quality and authenticity.</p>
            </div>
            <div className='choose_item'>
              <h3>Farm-to-Table Commitment: </h3>
              <p>We source the freshest, locally sourced ingredients to ensure each dish is a celebration of seasonal flavors.</p>
            </div>
            <div className='choose_item'>
              <h3>Elegant Ambiance: </h3>
              <p>Immerse yourself in a sophisticated and inviting atmosphere.</p>
            </div>
            <div className='choose_item'>
              <h3>Exceptional Service: </h3>
              <p>Our attentive and knowledgeable staff are dedicated to providing a memorable dining experience.</p>
            </div>
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
            <div className='flex-center'>
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
        </div>
      </section>
    </div>
  )
}
