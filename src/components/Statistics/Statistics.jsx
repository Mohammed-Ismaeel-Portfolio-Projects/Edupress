import React from 'react'
import StatisticsCard from '../StatisticsCard/StatisticsCard'

const Statistics = () => {
  return (
    <section className="statistics w-11/12 my-16 mx-auto">
      <div className="cards flex justify-between gap-7 flex-wrap max-md:justify-center">
        <StatisticsCard number={'25K+'} title={'Active Students'} />
        <StatisticsCard number={'899'} title={'Total Courses'} />
        <StatisticsCard number={'158'} title={'Instructor'} />
        <StatisticsCard number={'100%'} title={'Satisfaction Rate'} />
      </div>
    </section>
  )
}

// .statistics .cards {
//   display: flex;
//   justify-content: space-between;
//   gap: 30px;
//   flex-wrap: wrap;
// }

export default Statistics
