import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from '../../assets/images/coming-soon.jpg'

function Portfolio (props) {
  const currentProject = {
    name: 'project name',
    description: 'Project Description'
  }

  return (
    <section id='portfolio' className='container text-center'>
      <div className='flex-row'>
        <div className='col'>
          <img src={photo} alt='coming soon' id='image1' className='img-thumbnail' />
        </div>
        <h1>{capitalizeFirstLetter(currentProject.name)}</h1>
        <p>{currentProject.description}</p>
      </div>
    </section>
  )
}

export default Portfolio