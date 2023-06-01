import React from "react";
import { Button, Form, Stack } from "react-bootstrap";

const FormPage = ({
  email,
  name,
  password,
  count,
  isPasswordError,
  handleChange,
  handleSubmit,
}) => {
  return (
    <Stack gap={2}>
      <h2>Form Page</h2>
      <span>{count}</span>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex flex-column align-items-start">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            value={name}
            onChange={(ev) => handleChange(ev)}
            required
            placeholder="ex: Marcell Andreas Samadhani Duha"
          />
        </Form.Group>
        <Form.Group className="mb-3 d-flex flex-column align-items-start">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            value={email}
            onChange={(ev) => handleChange(ev)}
            required
            placeholder="ex: blabla@gmail.com"
          />
        </Form.Group>
        <Form.Group className="mb-3 d-flex flex-column align-items-start">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            value={password}
            required
            onChange={(ev) => handleChange(ev)}
          />
          {isPasswordError && (
            <Form.Text className="text-error">
              Password tidak sesuai yang diinginkan. Password harus lebih dari 5
              karakter
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3 d-flex flex-column align-items-start">
          <Form.Label>Gender</Form.Label>
          <Stack gap={2} direction="horizontal">
            <Form.Check
              name="gender"
              type="radio"
              label="Laki-Laki"
              value="L"
              required
              onChange={(ev) => handleChange(ev)}
            />
            <Form.Check
              name="gender"
              type="radio"
              label="Perempuan"
              value="P"
              required
              onChange={(ev) => handleChange(ev)}
            />
          </Stack>
        </Form.Group>
        <Form.Group
          className="mb-3 d-flex flex-column align-items-start"
          onChange={(ev) => handleChange(ev)}
        >
          <Form.Label>Hobby</Form.Label>
          <Stack gap={2} direction="horizontal">
            <Form.Check
              name="hobby"
              type="checkbox"
              label="Ngegame"
              value="ngegame"
            />
            <Form.Check
              name="hobby"
              type="checkbox"
              label="Ngoding"
              value="ngoding"
            />
            <Form.Check
              name="hobby"
              type="checkbox"
              label="Kuliner"
              value="kuliner"
            />
            <Form.Check
              name="hobby"
              type="checkbox"
              label="Baca Buku"
              value="baca buku"
            />
          </Stack>
        </Form.Group>
        <Button variant="success" type="submit" disabled={isPasswordError}>
          Submit
        </Button>
      </Form>
    </Stack>
  );
};

export default FormPage;
