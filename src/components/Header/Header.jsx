import React from 'react'
import NavBar from '../NavBar/NavBar'
import Hero from '../Hero/Hero'

const Header = () => {
  return (
    <div className="header relative h-screen">
      <NavBar
        navLinks={[
          { title: 'Home', path: '' },
          { title: 'Courses', path: 'courses' },
          { title: 'Blog', path: 'blog' },
          { title: 'Page', path: 'page' },
          { title: 'Premium Theme', path: 'premium' },
        ]}
      />
      <Hero />
    </div>
  )
}

export default Header
