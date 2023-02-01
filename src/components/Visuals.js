import { visualContainer } from '../data'
// import Title from './Title'
import React, { useState } from 'react'

// a carousel component I added to the project
const Visuals = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  console.log('use state', useState(0))
  console.log('current', currentIndex)
  console.log('setcurrent', setCurrentIndex)

  const handlePrevious = () => {
    currentIndex > 0 && currentIndex < visualContainer.length
      ? setCurrentIndex(currentIndex - 1)
      : setCurrentIndex(visualContainer.length - 1)
  }

  const handleNext = () => {
    currentIndex < visualContainer.length - 1
      ? setCurrentIndex(currentIndex + 1)
      : setCurrentIndex(0)
  }
  console.log('whats this hereere ??????', visualContainer[currentIndex])
  const myImg = Object.values(visualContainer[currentIndex])
  let arry = [...myImg][1]
  console.log('arry ??', arry)
  return (
    <div className=" visual-container">
      
      {/* <Visual /> */}
      <div className="tall">
        <button className="hero-btn btn tall" onClick={handlePrevious}>
          b
        </button>
      </div>

      <img className="visual-img" src={arry} alt="" />
      <button className="hero-btn btn tall" onClick={handleNext}>
        F
      </button>
    </div>
  )
}

export default Visuals
