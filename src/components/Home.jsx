import React from 'react'
import Header from './partials/Header'
import Banner from './Banner'
import About from './About'
import Projects from './projects/Projects'

const Home = () => {

  function scrollToElement(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`Element with id ${id} not found`);
    }
  }

  return (
    <div className='dark' id='home'>
        <Header scrollToElement={scrollToElement}/>
        <Banner/>
        <Projects/>
        <About/>
    </div>
  )
}

export default Home