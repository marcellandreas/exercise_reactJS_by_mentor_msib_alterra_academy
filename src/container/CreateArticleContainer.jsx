import React from "react";
import { client, getArticles } from "../api.js";
import { useState, useEffect } from "react";
import CreateArticlePage from "../components/CreateArticlePage";
import { gql, useMutation, useQuery } from "@apollo/client";

const InsertArticle = gql`
  mutation MyMutation(
    $objects: [_onetomany_article_insert_input!] = {
      author_id: "author_id"
      id: "id"
      rating: "rating"
      title: "title"
    }
  ) {
    insert__onetomany_article(objects: $objects) {
      returning {
        author_id
        id
        rating
        title
      }
    }
  }
`;

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

const UpdateArticle = gql`
  mutation MyMutation(
    $id: Int!
    $author_id: Int!
    $title: String!
    $rating: Int!
  ) {
    update_Pratikum_todo(
      where: { id: { _eq: $id } }
      _set: { author_id: $author_id, rating: $rating, title: $title }
    ) {
      returning {
        author_id
        completed
        id
        title
      }
    }
  }
`;

const CreateArticleContainer = () => {
  const [GetArticle, setGetArticle] = useState(GetArticles);
  const { data, loading, error } = useQuery(GetArticle);
  // const [articles, setArticles] = useState([]);
  // console.log(InsertArticle);
  const [insertArticle, { data: dataInsert, loading: loadingInsert }] =
    new useMutation(InsertArticle, { refetchQueries: [GetArticle] });
  // const [loading, setLoading] = useState([true]);
  // const [UpdateArticle, { data: dataIpdate, loading: loadingUpdate }] =
  //   new useMutation(UpdateArticle, { refetchQueries: [GetArticle] });

  const [formData, setFormData] = useState({
    id: "",
    authorId: "",
    rating: 0,
    title: "",
  });

  const handleChangeFormData = (label, newValue) => {
    setFormData({
      ...formData,
      [label]: newValue,
    });
  };

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

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const articleLoaction = GetArticles.findIndex(
      (article) => article.id === +formData.id
    );
    if (articleLoaction >= 0) {
      await UpdateArticle({
        variables: {
          id: +formData.id,
          author_id: +formData.authorId,
          rating: +formData.rating,
          title: formData.title,
        },
      });
    } else {
      await insertArticle({
        variables: {
          objects: {
            id: +formData.id,
            author_id: +formData.authorId,
            rating: +formData.rating,
            title: formData.title,
          },
        },
      }).then((res) => {
        setGetArticle((prevState) => [
          ...prevState,
          res.data.insert__onetomany_article.returning[0],
        ]);
        console.log(res.data);
      });
    }

    console.log(Object);
  };
  // const handleSubmit = async (evt) => {
  //   evt.preventDefault();
  //   const articleLoaction = articles.findIndex(
  //     (article) => article.id === +formData.id
  //   );
  //   const id = formData.id;
  //   if (articleLoaction >= 0) {
  //     await client.put(id, {
  //       author_id: formData.authorId,
  //       rating: formData.rating,
  //       title: formData.title,
  //     });
  //   } else {
  //     await client.post("/", {
  //       author_id: formData.authorId,
  //       id: formData.id,
  //       rating: formData.rating,
  //       title: formData.title,
  //     });
  //   }
  //   setLoading(true);
  // };

  return (
    <>
      <CreateArticlePage
        formData={formData}
        handleChangeFormData={handleChangeFormData}
        articles={data}
        loading={loading}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default CreateArticleContainer;
