import React, { useEffect } from 'react'
import './main.css'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import { data as datas } from '../../ultilities'

import Aos  from 'aos'

import 'aos/dist/aos.css'

function Main() {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <section className="container main section">
      <div className="secTitle">
        <h3 data-aos='fade-up' className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {
          datas.map(data=>{
            const { id , imgSrc,destTitle,location,grade,fees,description} = data
            return (
              <div key={id} data-aos='fade-up' className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} width={100}/>
                </div>
                <div className="cardInfo">
                  <h4 className="descTitle">
                    {destTitle}
                  </h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon'/>
                    <span className="name">
                      {location}
                    </span>
                  </span>
                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className='icon'/>
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Main