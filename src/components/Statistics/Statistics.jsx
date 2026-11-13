import StatisticsCard from '../StatisticsCard/StatisticsCard'

const Statistics = () => {
  return (
    <section className="statistics w-11/12 my-16 mx-auto">
      <div className="cards flex justify-between gap-7 flex-wrap max-md:justify-center">
        <StatisticsCard number={'25K+'} title={'Active Students'} />
        <StatisticsCard number={'899'} title={'Total Courses'} />
        <StatisticsCard number={'158'} title={'Expert Instructors'} />
        <StatisticsCard number={'100%'} title={'Satisfaction Rate'} />
      </div>
    </section>
  )
}

export default Statistics
