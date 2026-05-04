import React from "react";
import ArticleList from "./src/components/articleList";
import Header from "./src/components/header";
import About from "./src/components/about";
import blogData from "../data/blog";
import logo from "../assets/logo";
import Article from "./src/components/article";
import "./src/index.css";


console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList articles={blogData.posts} />
    </div>
  );
}

export default App;
