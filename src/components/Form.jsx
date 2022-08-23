import React from "react";
import { useGlobal } from "./context";

const Form = () => {
  const { search, searchHandler, error } = useGlobal();
  const { show, msg } = error;
  return (
    <article className="form_container">
      <div className="container">
        <form>
          <label htmlFor="search">search movies</label>
          <input
            onChange={searchHandler}
            value={search}
            type="text"
            name="search"
            id="search"
            autoComplete="off"
            aria-label="search"
          />
          {show && <small className="error">{msg}</small>}
        </form>
      </div>
    </article>
  );
};

export default Form;
