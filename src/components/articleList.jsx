export default function ArticleList({ articles }) {
  return (
    <main>
      {articles.map((article) => (
        <Article key={article.id} {...article} />
      ))}
    </main>
  );
}