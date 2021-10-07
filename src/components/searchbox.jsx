import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { Form, FormControl, Button } from "react-bootstrap";

export default function SearchBox({ moviesData, setQuery }) {
  const [searchInput, setSearchInput] = useState("");
  const [isVisibleSpinner, setVisibleSpinner] = useState(false);

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchInput(event.target.value);
    setVisibleSpinner(true);
  };

  const handleKeyUp = (event) => {
    event.preventDefault();
    setTimeout(() => {
      setVisibleSpinner(false);
    }, 200);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setQuery(searchInput);
  };

  return (
    <div>
      <Spinner
        className={isVisibleSpinner ? "" : "spin"}
        animation="border"
        variant="primary"
      />
      <Form className="d-flex" onSubmit={handleSubmit}>
        <FormControl
          type="search"
          placeholder="Search"
          className="mr-2"
          aria-label="Search"
          value={searchInput}
          onChange={handleSearch}
          onKeyUp={handleKeyUp}
          style={{ marginRight: "5px" }}
        />

        <Button variant="outline-success" onClick={handleSubmit}>
          Search
        </Button>
      </Form>
    </div>
  );
}
