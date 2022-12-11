import React from 'react';


function About() {
  
  return(
    <section className='aboutme'>
      <h1 id='about'>About Me</h1>
      <img 
        src={require('../../assets/images/Jaime_and_I.jpg')}
        alt='My fiance and I'
        className='Photo' />
    </section>
  )
}

export default About