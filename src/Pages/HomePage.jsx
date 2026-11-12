import React from 'react'
import Header from '../components/Header/Header'
import Categories from '../components/Categories/Categories'
import Featured from '../components/Featured/Featured'
import Banner from '../components/banner/banner'
import Statistics from '../components/Statistics/Statistics'
import Grow from '../components/Grow/Grow'

import Footer from '../components/Footer/Footer'
import Banner3 from '../components/Banner3/Banner3'
import Banner2 from '../components/Banner2/Banner2'
import LatestArticles from '../components/LatestArticls/LatestArticles'
import Feedback from '../components/Feedback/Feedback'

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="cont w-11/12 mx-auto">
        <Categories />
        <Featured />
      </div>
      <Banner />
      <Statistics />
      <Grow />
      <Banner2 />
      {/* <Feedback /> */}
      <Banner3 />
      <LatestArticles />
      <Footer />
    </div>
  )
}

export default HomePage
