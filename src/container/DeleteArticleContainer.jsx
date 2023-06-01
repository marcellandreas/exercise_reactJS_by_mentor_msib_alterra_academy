import { useState, useEffect } from "react";
import { getArticles, client } from "../api";
import DeleteArticlePage from "../components/DeleteArticlePage";

const DeleteArticleContainer = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [articleId, setArticleId] = useState("");

  const handleInputChangeId = (id) => {
    setArticleId(id);
  };

  useEffect(() => {
    getArticles()
      .then((res) => {
        setArticles(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [loading]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await client.delete(articleId);
    setLoading(true);
  };
  return (
    <>
      <DeleteArticlePage
        handleInputChangeId={handleInputChangeId}
        articles={articles}
        loading={loading}
        handleSubmit={handleSubmit}
        articleId={articleId}
      />
    </>
  );
};

export default DeleteArticleContainer;
