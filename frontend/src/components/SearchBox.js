import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
const SearchBox = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate("/");
    }
    setKeyword("");
  };
  return (
    <Form onSubmit={submitHandler} className="d-flex">
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search Products..."
        className="mr-5 square  rounded-pill "

      ></Form.Control>
      <Button type="submit" variant="outline-success" className="square  rounded-pill "  >
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
