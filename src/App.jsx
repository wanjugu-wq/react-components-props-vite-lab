import React from "react";
import ArticleList from "./components/ArticleList";
import Header from "./components/Header";
import About from "./components/About";
import blogData from "./data/blog";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
