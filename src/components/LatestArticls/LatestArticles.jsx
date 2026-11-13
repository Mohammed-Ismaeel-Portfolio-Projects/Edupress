import Heading from '../Heading/Heading'
import ArticleCard from '../ArticleCard/ArticleCard'
import articles from './../Articles'

const showLatestArticles = (articlesList) => {
  return articlesList
    .slice(0, 3) 
    .map((article) => (
      <ArticleCard
        key={article.id}
        articleId={article.id}
        articleImage={article.image}
        title={article.title}
        date={article.date}
        desc={article.desc}
      />
    ));
};

const LatestArticles = () => {
  return (
    <div className="latest-articles my-20 w-11/12 mx-auto">
      <Heading
        title={'Latest Articles'}
        desc={'Explore our Free Articles'}
        buttonText={'All Articles'}
        buttonTo={"/blog"}
      />
      <div className="courses-cards flex flex-wrap justify-between my-14 gap-12 max-xl:justify-center">
        {showLatestArticles(articles)}
      </div>
    </div>
  )
}

export default LatestArticles
