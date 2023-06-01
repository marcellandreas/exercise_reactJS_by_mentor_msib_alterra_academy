import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./features/counterSlice";
import "./home.css";
import { Card } from "react-bootstrap";

const Home = () => {
  const count = useSelector((state) => state.counter.value);
  const email = useSelector((state) => state.user.email);
  const dispatch = useDispatch();
  return (
    <div className="container-home">
      <div className="title ">
        <h1>Latihan Live Code Alterra MSIB</h1>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center ">
        <span>HI, {email}</span>
        <span className="display-4">{count}</span>
        <div className="d-flex  mb-2">
          <button
            className="me-3 btn btn-danger"
            onClick={() => dispatch(increment())}
          >
            +
          </button>
          <button
            className="btn btn-danger"
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <Card.Header className="col-12">
            Link Pengerjaan Live Code
          </Card.Header>
          <Card.Body className="col-6 ms-3 d-flex flex-row justify-content-center align-items-center flex-wrap home-base">
            <Link to="/animal-page">
              <button className="btn btn-primary "> Animal Pages</button>
            </Link>
            <Link to="/form">
              <button className="btn btn-success ">Form Page</button>
            </Link>
            <Link to="/read-article">
              <button className="btn btn-success ">Read Article</button>
            </Link>
            <Link to="/create-article">
              <button className="btn btn-success ">Create Article</button>
            </Link>
            <Link to="/delete-article">
              <button className="btn btn-success">Delete Article</button>
            </Link>
          </Card.Body>
        </div>
      </div>
    </div>
  );
};

export default Home;
