import React from "react";
import { Button, Stack, Form, Spinner } from "react-bootstrap";

const CreateArticlePage = ({
  articles,
  loading,
  formData,
  handleChangeFormData,
  handleSubmit,
}) => {
  const { authorId, id, rating, title } = formData;
  return (
    <Stack gap={4} className="justify-items-center">
      CREATE
      <Form onSubmit={handleSubmit}>
        <Stack direction="horizontal" gap={2}>
          <Form.Group>
            <Form.Label>Author ID</Form.Label>
            <Form.Control
              value={authorId}
              onChange={(ev) =>
                handleChangeFormData("authorId", ev.currentTarget.value)
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>ID</Form.Label>
            <Form.Control
              value={id}
              onChange={(ev) =>
                handleChangeFormData("id", ev.currentTarget.value)
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Ratting</Form.Label>
            <Form.Control
              value={rating}
              onChange={(ev) =>
                handleChangeFormData("rating", ev.currentTarget.value)
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              value={title}
              onChange={(ev) =>
                handleChangeFormData("title", ev.currentTarget.value)
              }
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Stack>
      </Form>
      {loading ? (
        <Spinner animation="grow" />
      ) : (
        <ol>
          {articles._onetomany_article.map((article) => {
            return (
              <li key={article.id}>
                {" "}
                ID: {article.id} Title: {article.title}
              </li>
            );
          })}
        </ol>
      )}
    </Stack>
  );
};

export default CreateArticlePage;
