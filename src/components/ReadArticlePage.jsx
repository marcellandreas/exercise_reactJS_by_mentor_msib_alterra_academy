import React from "react";
import { Spinner, Stack } from "react-bootstrap";

const ReadArticlePage = ({ articles, loading }) => {
  console.log("DI ReadArticlePage", articles);
  return (
    <Stack className="align-items-center">
      <h2>Read Article</h2>
      {loading ? (
        <Spinner animation="grow" />
      ) : (
        articles?._onetomany_article.map((article) => {
          return <div key={article.id}>{article.title}</div>;
        })
      )}
    </Stack>
  );
};

export default ReadArticlePage;

// onClick={() => setReload()}
