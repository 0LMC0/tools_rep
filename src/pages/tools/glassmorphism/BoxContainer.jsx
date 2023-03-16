import React from 'react'
import '../../../assets/styles/tools/glassmorphism/boxContainer/boxContainer.css'

const BoxContainer = ({ blur, borderRadius, color }) => {

  console.log(borderRadius)

  return (
    <div className='box-container'>
      <div className="box" 
            style={{
              backdropFilter: `blur(${blur}px)`,
              WebkitBackdropFilter: `blur(${blur}px)`,
              borderRadius:`${borderRadius}px`,
              WebkitBorderRadius: `${borderRadius}px`,
              backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`
              }}>
              </div>
    </div>
  )
}

export default BoxContainer