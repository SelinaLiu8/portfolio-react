import React from 'react'
import CV from '../../assets/PM_Resume_3:3_2025.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Reach out to me!</a>
    </div>
  )
}

export default CTA