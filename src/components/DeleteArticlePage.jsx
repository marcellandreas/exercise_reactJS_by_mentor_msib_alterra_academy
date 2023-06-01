import React from "react";
import { Button, Form, Stack, Spinner } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import "./componen.css";

const DeleteArticlePage = ({
  articles,
  loading,
  articleId,
  handleSubmit,
  handleInputChangeId,
}) => {
  return (
    <Stack id="container-home" gap={2} className="align-items-center">
      <div className="title">Delete</div>
      <Form className="form-container" onSubmit={handleSubmit}>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <Form.Group className="mb-3">
            <Form.Label className="title pe-3">Article Form</Form.Label>
            <Form.Control
              value={articleId}
              onChange={(event) =>
                handleInputChangeId(event.currentTarget.value)
              }
              placeholder="id"
            />
          </Form.Group>
          <Button variant="secondary" type="sumbit">
            submit
          </Button>
        </div>
      </Form>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>id</th>
            <th>Title</th>
          </tr>
        </thead>
        {loading ? (
          <Spinner animation="grow" />
        ) : (
          articles.map((article) => {
            return (
              <tbody key={article.id}>
                <tr>
                  <td>{article.id}</td>
                  <td>{article.title}</td>
                </tr>
              </tbody>
            );
          })
        )}
      </Table>
    </Stack>
  );
};
export default DeleteArticlePage;
