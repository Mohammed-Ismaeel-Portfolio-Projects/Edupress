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
          { title: 'Contact', path: 'contact' },
          { title: 'FAQs', path: 'faqs' },
        ]}
      />
      <Hero />
    </div>
  )
}

export default Header
