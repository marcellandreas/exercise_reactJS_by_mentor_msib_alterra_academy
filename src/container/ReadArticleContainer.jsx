import React, { useState, useEffect } from "react";
import ReadArticlePage from "../components/ReadArticlePage";
import { getArticles } from "../api.js";
import { gql, useLazyQuery, useQuery, useSubscription } from "@apollo/client";

const GetArticles = gql`
  query MyQuery {
    _onetomany_article {
      author_id
      id
      rating
      title
    }
  }
`;

const SubscriptionArticles = gql`
  subscription MySubscription {
    _onetomany_article {
      author_id
      id
      rating
      title
    }
  }
`;

const ReadArticleContainer = () => {
  const { data, loading, error } = useSubscription(SubscriptionArticles);
  // const { data, loading, error } = useQuery(GetArticles);
  // const [getOneToManyArticles, { data, loading, error, refetch }] =
  //   useLazyQuery(GetArticles);

  // const onClickData = () => {
  //   refetch();
  // };

  // useEffect(() => {
  //   getOneToManyArticles();
  // }, []);

  // const [articles, setArticles] = useState([]);
  // const [loading, setLoading] = useState(true);
  // console.log(loading);

  // const setReload = () => {
  //   setLoading(true);
  // };

  // useEffect(() => {
  //   getArticles()
  //     .then((res) => {
  //       setArticles(res);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [loading]);

  return (
    <div>
      <ReadArticlePage
        articles={data}
        loading={loading}
        // setReload={setReload}
      />
    </div>
  );
};

export default ReadArticleContainer;
