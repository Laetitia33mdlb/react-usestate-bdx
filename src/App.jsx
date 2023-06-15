import './App.css';
import ArticleCard from './components/ArticleCard.jsx';
import articles from './data/articles.json';

const App = () => {
  return (
    <>
      <h1>Articles</h1>

      <div className="container">
        {articles.map((article) => (
          <ArticleCard {...article} key={article.id} />
        ))}
      </div>
    </>
  );
};

export default App;
